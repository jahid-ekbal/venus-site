// Venus Free Fire - Site utilities
// Players data + renderers for guilds and player profile pages

const PLAYERS = [
	{
		id: "p1",
		name: "VNS ZENIX7",
		uid: "2725991374",
		discord: "vnszenix",
		dob: "2000-03-14",
		avatar: "img/players-image/adnan.jpg",
		role: "Captain",
		bio: "Aggressive fragger and team leader.",
		kdr: "3.2",
		wins: 128,
	},
	{
		id: "p2",
		name: "VNS ARAF",
		uid: "7474496903",
		discord: "araf260",
		dob: "1999-07-02",
		avatar: "",
		role: "Support",
		bio: "Tactical support with great vision.",
		kdr: "2.1",
		wins: 94,
	},
	{
		id: "p3",
		name: "VNS SHOWROV",
		uid: "2261297220",
		discord: "m.hshowrov",
		dob: "1998-11-22",
		avatar: "",
		role: "Sniper",
		bio: "Long range specialist.",
		kdr: "2.9",
		wins: 110,
	},
	{
		id: "p4",
		name: "VNS JIHAD",
		uid: "9738405294",
		discord: "guru_jahid",
		dob: "2007-01-07",
		avatar: "img/players-image/jahid.jpg",
		role: "Roamer",
		bio: "Fast flanker and entry fragger.",
		kdr: "2.7",
		wins: 102,
	},
	{
		id: "p5",
		name: "VNS MUNNA",
		uid: "FF100205",
		discord: "munna17",
		dob: "1996-05-20",
		avatar: "",
		role: "In-game Leader",
		bio: "Strategic shotcaller.",
		kdr: "1.9",
		wins: 76,
	},
	{
		id: "p6",
		name: "VNS SPAY",
		uid: "1777755345",
		discord: "showrov8874",
		dob: "1997-09-07",
		avatar: "",
		role: "Fragger",
		bio: "High mechanical skill.",
		kdr: "3.5",
		wins: 140,
	},
	{
		id: "p7",
		name: "VNS PRIOM",
		uid: "1804292846",
		discord: "priom034",
		dob: "2002-02-12",
		avatar: "",
		role: "Support",
		bio: "Objective specialist.",
		kdr: "1.8",
		wins: 63,
	},
	{
		id: "p8",
		name: "VNS ASHRAF",
		uid: "2386323124",
		discord: "ashraf_editz",
		dob: "1995-08-30",
		avatar: "",
		role: "Sniper",
		bio: "Calm and precise.",
		kdr: "2.6",
		wins: 88,
	},
	{
		id: "p9",
		name: "VNS JAZZBI",
		uid: "7640515444",
		discord: "JAZZBI#3349",
		dob: "1994-12-11",
		avatar: "",
		role: "Tank",
		bio: "Durable frontliner.",
		kdr: "1.7",
		wins: 70,
	},
	{
		id: "p10",
		name: "VNS ARNOB ",
		uid: "2413108655",
		discord: "ARNOB#7781",
		dob: "1993-04-09",
		avatar: "",
		role: "Utility",
		bio: "Map control and utilities.",
		kdr: "2.0",
		wins: 80,
	},
	{
		id: "p11",
		name: "VNS HAMMER",
		uid: "6783813826",
		discord: "HAMMER#0010",
		dob: "1988-06-02",
		avatar: "",
		role: "Coach",
		bio: "Team strategist and coach.",
		kdr: "—",
		wins: 0,
	},
	{
		id: "p12",
		name: "VNS SIHAB",
		uid: "1796978945",
		discord: "SIHAB#4412",
		dob: "2001-10-27",
		avatar: "",
		role: "Fragger",
		bio: "High tempo player.",
		kdr: "2.8",
		wins: 98,
	},
	{
		id: "p13",
		name: "VNS LABIB",
		uid: "8805001880",
		discord: "abirytpromax",
		dob: "1996-07-16",
		avatar: "img/players-image/labib.jpg",
		role: "1st Rusher",
		bio: "Aggressive 1v1 specialist.",
		kdr: "3.0",
		wins: 115,
	},
	{
		id: "p14",
		name: "VNS SUPTO",
		uid: "1235303769",
		discord: "SUPTO#9901",
		dob: "2000-09-03",
		avatar: "",
		role: "Support",
		bio: "Rotations and cover fire.",
		kdr: "1.6",
		wins: 55,
	},
	{
		id: "p15",
		name: "VNS ASHIK",
		uid: "6724519736",
		discord: "ASHIK#3006",
		dob: "1992-02-25",
		avatar: "",
		role: "Analyst",
		bio: "Data-driven playstyle.",
		kdr: "—",
		wins: 0,
	},
	{
		id: "p16",
		name: "VNS skree",
		uid: "10324119006",
		discord: "skree0082",
		dob: "1992-02-25",
		avatar: "",
		role: "Analyst",
		bio: "Data-driven playstyle.",
		kdr: "—",
		wins: 0,
	},
	{
		id: "p17",
		name: "VNS PRADO",
		uid: "1775295554",
		discord: "ayman017687",
		dob: "1992-02-25",
		avatar: "",
		role: "Analyst",
		bio: "Data-driven playstyle.",
		kdr: "—",
		wins: 0,
	},
	{
		id: "p18",
		name: "VNS danger",
		uid: "6693527722",
		discord: "",
		dob: "",
		avatar: "",
		role: "Analyst",
		bio: "Data-driven playstyle.",
		kdr: "—",
		wins: 0,
	},
	{
		id: "p19",
		name: "VNS AXERON",
		uid: "1179396485",
		discord: "vnsaxeron",
		dob: "",
		avatar: "",
		role: "Analyst",
		bio: "Data-driven playstyle.",
		kdr: "—",
		wins: 0,
	},
	{
		id: "p20",
		name: "VNS ASHIK",
		uid: "6724519736",
		discord: "ASHIK#3006",
		dob: "1992-02-25",
		avatar: "",
		role: "Analyst",
		bio: "Data-driven playstyle.",
		kdr: "—",
		wins: 0,
	},
	{
		id: "p21",
		name: "VNS MUSA",
		uid: "816372262",
		discord: "wlxmusa",
		dob: "",
		avatar: "",
		role: "Analyst",
		bio: "Data-driven playstyle.",
		kdr: "—",
		wins: 0,
	},
];

function makeAvatarInitials(name) {
	const parts = name.trim().split(/\s+/);
	const initials =
		(parts[0][0] || "").toUpperCase() +
		(parts[1] ? parts[1][0].toUpperCase() : "");
	return initials;
}

function renderGuildsList(containerId = "guildsGrid") {
	const container = document.getElementById(containerId);
	if (!container) return;
	container.innerHTML = "";
	PLAYERS.forEach((p) => {
		const card = document.createElement("a");
		card.className = "card player-card";
		card.href = `player.html?id=${encodeURIComponent(p.id)}`;
		card.innerHTML = `
				<div class="player-row">
					<div class="avatar-wrap">
						<div class="avatar">${makeAvatarInitials(p.name)}</div>
						<span class="discord-status" data-discord="${escapeHtml(
							p.discord
						)}" title="Discord status" aria-hidden="true"></span>
					</div>
					<div class="player-meta">
						<h4>${escapeHtml(p.name)}</h4>
						<div class="muted">UID: ${escapeHtml(p.uid)} • ${escapeHtml(p.role)}</div>
					</div>
				</div>
			`;
		container.appendChild(card);
	});
}

// Fetch Discord guild widget members using an invite code and mark online players
async function markDiscordOnlinePlayers(inviteCode) {
	if (!inviteCode) return;
	try {
		// Resolve invite to get guild id (public endpoint)
		const invRes = await fetch(
			`https://discord.com/api/v10/invites/${encodeURIComponent(
				inviteCode
			)}?with_counts=true`
		);
		if (!invRes.ok) return;
		const invJson = await invRes.json();
		const guildId = invJson.guild && invJson.guild.id;
		if (!guildId) return;

		// Fetch widget.json for the guild (requires widget enabled on server)
		const widgetRes = await fetch(
			`https://discord.com/api/guilds/${encodeURIComponent(
				guildId
			)}/widget.json`
		);
		if (!widgetRes.ok) return;
		const widget = await widgetRes.json();
		if (!widget || !Array.isArray(widget.members)) return;

		// Build a set of online member usernames (status !== 'offline')
		const onlineUsernames = new Set();
		widget.members.forEach((m) => {
			if (m.status && m.status !== "offline")
				onlineUsernames.add(String(m.username).toLowerCase());
		});

		// Mark matching player cards
		document
			.querySelectorAll(".discord-status[data-discord]")
			.forEach((el) => {
				const discordUsername = el.getAttribute("data-discord");
				if (!discordUsername) return;
				if (
					onlineUsernames.has(String(discordUsername).toLowerCase())
				) {
					el.classList.add("online");
					el.title = "Online on Discord";
				} else {
					el.classList.remove("online");
					el.title = "Offline on Discord";
				}
			});
	} catch (err) {
		// silently ignore network errors
		console.warn("Discord presence check failed:", err);
	}
}

function renderPlayerProfileFromQuery() {
	const el = document.getElementById("playerProfile");
	if (!el) return;
	const params = new URLSearchParams(window.location.search);
	const id = params.get("id");
	const player = PLAYERS.find((p) => p.id === id);
	if (!player) {
		el.innerHTML = "<p>Player not found.</p>";
		return;
	}
	const avatarBlock = player.avatar
		? `<img src="${escapeHtml(player.avatar)}" alt="${escapeHtml(
				player.name
		  )} avatar" class="avatar-img large"/>`
		: `<div class="avatar large">${makeAvatarInitials(player.name)}</div>`;

	el.innerHTML = `
		<div class="profile-card">
			<div class="profile-head">
				${avatarBlock}
				<div class="profile-meta">
					<h2>${escapeHtml(player.name)}</h2>
					<p class="muted">UID: ${escapeHtml(player.uid)} • ${escapeHtml(player.role)}</p>
					<p class="muted">Discord: ${escapeHtml(
						player.discord || "-"
					)} <span class="discord-status" data-discord="${escapeHtml(
		player.discord
	)}" title="Discord status"></span></p>
					<p class="muted">Date of Birth: ${escapeHtml(player.dob || "-")}</p>
				</div>
			</div>
			<div class="profile-bio">
				<h3>About</h3>
				<p>${escapeHtml(player.bio)}</p>
				<h3>Stats</h3>
				<ul>
					<li><strong>K/D:</strong> ${escapeHtml(player.kdr)}</li>
					<li><strong>Wins:</strong> ${escapeHtml(player.wins)}</li>
				</ul>
			</div>
			<div style="margin-top:12px"><a class="btn" href="guilds.html">Back to Guild</a></div>
		</div>
	`;
}

function escapeHtml(s) {
	return String(s || "").replace(
		/[&<>\"]/g,
		(m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m])
	);
}

// Auto-run renderers when appropriate
document.addEventListener("DOMContentLoaded", () => {
	// guilds page has container with id 'guildsGrid'
	renderGuildsList("guildsGrid");

	// Attempt to mark Discord online players for the provided invite code
	// Invite code from user: 3R9C7pMCFA
	markDiscordOnlinePlayers("3R9C7pMCFA");
	// profile page container id 'playerProfile'
	renderPlayerProfileFromQuery();

	// Nav toggle for mobile - support multiple toggles and accessible behaviors
	(function initNavToggle() {
		const toggles = Array.from(document.querySelectorAll(".nav-toggle"));
		const navs = Array.from(document.querySelectorAll(".main-nav"));
		function setNavOpen(open) {
			document.body.classList.toggle("nav-open", open);
			toggles.forEach((t) =>
				t.setAttribute("aria-expanded", open ? "true" : "false")
			);
		}
		toggles.forEach((t) => {
			t.addEventListener("click", (ev) => {
				ev.preventDefault();
				setNavOpen(!document.body.classList.contains("nav-open"));
			});
		});

		// Close nav when any nav link is clicked (mobile)
		navs.forEach((nav) => {
			nav.addEventListener("click", (e) => {
				const a = e.target.closest("a");
				if (!a) return;
				// close on small screens
				if (
					window.matchMedia &&
					window.matchMedia("(max-width: 699px)").matches
				) {
					setNavOpen(false);
				}
			});
		});

		// Close on Escape and click outside
		document.addEventListener("keydown", (e) => {
			if (
				e.key === "Escape" &&
				document.body.classList.contains("nav-open")
			) {
				setNavOpen(false);
			}
		});
		document.addEventListener(
			"click",
			(e) => {
				if (!document.body.classList.contains("nav-open")) return;
				const inside =
					e.target.closest(".main-nav") ||
					e.target.closest(".nav-toggle");
				if (!inside) {
					setNavOpen(false);
				}
			},
			{ capture: true }
		);
	})();

	// Flame pointer trail
	(function initFlamePointer() {
		if (
			window.matchMedia &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches
		)
			return;
		const container = document.querySelector(".particles") || document.body;
		let last = 0;
		const throttle = 25; // ms between particles
		function makeDot(x, y) {
			const dot = document.createElement("div");
			dot.className = "flame-dot";
			const size = 14 + Math.random() * 28;
			dot.style.width = size + "px";
			dot.style.height = size + "px";
			dot.style.left = x + "px";
			dot.style.top = y + "px";
			const rotate = Math.random() * 60 - 30;
			dot.style.transform = `translate(-50%, -50%) rotate(${rotate}deg) scale(${
				0.9 + Math.random() * 0.4
			})`;
			container.appendChild(dot);
			// remove after animation
			setTimeout(() => {
				if (dot && dot.parentNode) dot.parentNode.removeChild(dot);
			}, 1100);
		}
		function onPointerMove(e) {
			const now = Date.now();
			if (now - last < throttle) return;
			last = now;
			const x =
				e.clientX ||
				(e.touches && e.touches[0] && e.touches[0].clientX) ||
				0;
			const y =
				e.clientY ||
				(e.touches && e.touches[0] && e.touches[0].clientY) ||
				0;
			makeDot(x, y);
		}
		window.addEventListener("pointermove", onPointerMove, {
			passive: true,
		});
		window.addEventListener("touchmove", onPointerMove, { passive: true });
	})();
});
