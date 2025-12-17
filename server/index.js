require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const cookieSession = require("cookie-session");
const path = require("path");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

// Basic security hardening
app.disable("x-powered-by");
app.set("trust proxy", 1); // if behind a proxy like nginx or Heroku
app.use(helmet());

// Basic rate limiting
const apiLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 12 });
app.use(apiLimiter);
app.use("/auth/", authLimiter);

// Content Security Policy - adjust as needed for external services used
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "https:", "data:"],
      connectSrc: ["'self'", "https://discord.com", "https://api.github.com"],
      frameAncestors: ["'none'"],
      baseUri: ["'self'"],
    },
  }),
);

const PORT = process.env.PORT || 3000;
const CLIENT_ID = process.env.CLIENT_ID || "";
const CLIENT_SECRET = process.env.CLIENT_SECRET || "";
const REDIRECT_URI =
  process.env.REDIRECT_URI || `http://localhost:${PORT}/auth/discord/callback`;
const SESSION_SECRET =
  process.env.SESSION_SECRET || "change_this_in_production";
const GUILD_ID = process.env.GUILD_ID || "";

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.log(
    "Warning: CLIENT_ID and CLIENT_SECRET are not set. See .env.example",
  );
}

app.use(
  cookieSession({
    name: "session",
    keys: [SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
  }),
);

// Serve the static site (parent folder) with caching for assets
app.use(
  express.static(path.join(__dirname, ".."), {
    dotfiles: "ignore",
    maxAge: "1d",
  }),
);

// Start Discord OAuth flow
app.get("/auth/discord", (req, res) => {
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: "code",
    scope: "identify guilds email",
  });
  res.redirect(`https://discord.com/api/oauth2/authorize?${params.toString()}`);
});

// OAuth callback
app.get("/auth/discord/callback", async (req, res) => {
  const code = req.query.code;
  if (
    !code ||
    typeof code !== "string" ||
    code.length > 512 ||
    !/^[\w\-\.]+$/.test(code)
  ) {
    return res.status(400).send("Invalid or missing code");
  }

  // use AbortController to enforce timeouts for external requests
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000); // 10s

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
      signal: controller.signal,
    });

    if (!tokenRes.ok) {
      const text = await tokenRes.text().catch(() => "");
      console.error("Token exchange failed", tokenRes.status, text);
      return res.status(502).send("Failed to obtain access token");
    }

    const tokenJson = await tokenRes.json();
    const access_token = tokenJson.access_token;
    if (!access_token)
      return res.status(502).send("Failed to obtain access token");

    // Fetch user
    const userRes = await fetch("https://discord.com/api/users/@me", {
      headers: { Authorization: `Bearer ${access_token}` },
      signal: controller.signal,
    });
    const user = await userRes.json();

    // Fetch guilds and check membership for configured GUILD_ID
    const guildsRes = await fetch("https://discord.com/api/users/@me/guilds", {
      headers: { Authorization: `Bearer ${access_token}` },
      signal: controller.signal,
    });
    const guilds = await guildsRes.json();
    const isMember =
      Array.isArray(guilds) &&
      guilds.some((g) => String(g.id) === String(GUILD_ID));

    // Save minimal user to session (avoid storing tokens)
    req.session.user = Object.assign(
      {},
      {
        id: user.id,
        username: user.username,
        discriminator: user.discriminator,
        avatar: user.avatar,
        email: user.email,
        isMember,
      },
    );

    clearTimeout(timeout);
    res.redirect("/");
  } catch (e) {
    clearTimeout(timeout);
    if (e.name === "AbortError") {
      console.error("OAuth request timed out");
      return res.status(504).send("Authentication timeout");
    }
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
  console.log(`Server started on http://localhost:${PORT}`),
);
