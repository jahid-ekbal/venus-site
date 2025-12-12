require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const cookieSession = require("cookie-session");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;
const CLIENT_ID = process.env.CLIENT_ID || "";
const CLIENT_SECRET = process.env.CLIENT_SECRET || "";
const REDIRECT_URI =
	process.env.REDIRECT_URI ||
	`http://localhost:${PORT}/auth/discord/callback`;
const SESSION_SECRET =
	process.env.SESSION_SECRET || "change_this_in_production";
const GUILD_ID = process.env.GUILD_ID || "";

if (!CLIENT_ID || !CLIENT_SECRET) {
	console.log(
		"Warning: CLIENT_ID and CLIENT_SECRET are not set. See .env.example"
	);
}

app.use(
	cookieSession({
		name: "session",
		keys: [SESSION_SECRET],
		maxAge: 24 * 60 * 60 * 1000, // 1 day
	})
);

// Serve the static site (parent folder)
app.use(express.static(path.join(__dirname, "..")));

// Start Discord OAuth flow
app.get("/auth/discord", (req, res) => {
	const params = new URLSearchParams({
		client_id: CLIENT_ID,
		redirect_uri: REDIRECT_URI,
		response_type: "code",
		scope: "identify guilds email",
	});
	res.redirect(
		`https://discord.com/api/oauth2/authorize?${params.toString()}`
	);
});

// OAuth callback
app.get("/auth/discord/callback", async (req, res) => {
	const code = req.query.code;
	if (!code) return res.status(400).send("Missing code");
	try {
		const tokenRes = await fetch("https://discord.com/api/oauth2/token", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams({
				client_id: CLIENT_ID,
				client_secret: CLIENT_SECRET,
				grant_type: "authorization_code",
				code,
				redirect_uri: REDIRECT_URI,
			}),
		});
		const tokenJson = await tokenRes.json();
		const access_token = tokenJson.access_token;
		if (!access_token)
			return res.status(500).send("Failed to obtain access token");

		// Fetch user
		const userRes = await fetch("https://discord.com/api/users/@me", {
			headers: { Authorization: `Bearer ${access_token}` },
		});
		const user = await userRes.json();

		// Fetch guilds and check membership for configured GUILD_ID
		const guildsRes = await fetch(
			"https://discord.com/api/users/@me/guilds",
			{
				headers: { Authorization: `Bearer ${access_token}` },
			}
		);
		const guilds = await guildsRes.json();
		const isMember =
			Array.isArray(guilds) &&
			guilds.some((g) => String(g.id) === String(GUILD_ID));

		// Save minimal user to session
		req.session.user = {
			id: user.id,
			username: user.username,
			discriminator: user.discriminator,
			avatar: user.avatar,
			email: user.email,
			isMember,
		};

		res.redirect("/");
	} catch (e) {
		console.error("OAuth callback error", e);
		res.status(500).send("Authentication error");
	}
});

app.get("/api/me", (req, res) => {
	if (req.session && req.session.user) {
		res.json(req.session.user);
	} else {
		res.status(401).json({ error: "not_authenticated" });
	}
});

app.get("/logout", (req, res) => {
	req.session = null;
	res.redirect("/");
});

app.listen(PORT, () =>
	console.log(`Server started on http://localhost:${PORT}`)
);
