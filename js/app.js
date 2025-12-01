// Venus Free Fire - Site utilities
// Players data + renderers for guilds and player profile pages

const PLAYERS = [
	{
		id: "p1",
		name: "Blaze",
		uid: "FF100201",
		role: "Captain",
		bio: "Aggressive fragger and team leader.",
		kdr: "3.2",
		wins: 128,
	},
	{
		id: "p2",
		name: "Viper",
		uid: "FF100202",
		role: "Support",
		bio: "Tactical support with great vision.",
		kdr: "2.1",
		wins: 94,
	},
	{
		id: "p3",
		name: "Phantom",
		uid: "FF100203",
		role: "Sniper",
		bio: "Long range specialist.",
		kdr: "2.9",
		wins: 110,
	},
	{
		id: "p4",
		name: "Ghost",
		uid: "FF100204",
		role: "Roamer",
		bio: "Fast flanker and entry fragger.",
		kdr: "2.7",
		wins: 102,
	},
	{
		id: "p5",
		name: "Nova",
		uid: "FF100205",
		role: "In-game Leader",
		bio: "Strategic shotcaller.",
		kdr: "1.9",
		wins: 76,
	},
	{
		id: "p6",
		name: "Rogue",
		uid: "FF100206",
		role: "Fragger",
		bio: "High mechanical skill.",
		kdr: "3.5",
		wins: 140,
	},
	{
		id: "p7",
		name: "Echo",
		uid: "FF100207",
		role: "Support",
		bio: "Objective specialist.",
		kdr: "1.8",
		wins: 63,
	},
	{
		id: "p8",
		name: "Frost",
		uid: "FF100208",
		role: "Sniper",
		bio: "Calm and precise.",
		kdr: "2.6",
		wins: 88,
	},
	{
		id: "p9",
		name: "Titan",
		uid: "FF100209",
		role: "Tank",
		bio: "Durable frontliner.",
		kdr: "1.7",
		wins: 70,
	},
	{
		id: "p10",
		name: "Zephyr",
		uid: "FF100210",
		role: "Utility",
		bio: "Map control and utilities.",
		kdr: "2.0",
		wins: 80,
	},
	{
		id: "p11",
		name: "Onyx",
		uid: "FF100211",
		role: "Coach",
		bio: "Team strategist and coach.",
		kdr: "—",
		wins: 0,
	},
	{
		id: "p12",
		name: "Raven",
		uid: "FF100212",
		role: "Fragger",
		bio: "High tempo player.",
		kdr: "2.8",
		wins: 98,
	},
	{
		id: "p13",
		name: "Blade",
		uid: "FF100213",
		role: "Duelist",
		bio: "Aggressive 1v1 specialist.",
		kdr: "3.0",
		wins: 115,
	},
	{
		id: "p14",
		name: "Sable",
		uid: "FF100214",
		role: "Support",
		bio: "Rotations and cover fire.",
		kdr: "1.6",
		wins: 55,
	},
	{
		id: "p15",
		name: "Oracle",
		uid: "FF100215",
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
				<div class="avatar">${makeAvatarInitials(p.name)}</div>
				<div class="player-meta">
					<h4>${escapeHtml(p.name)}</h4>
					<div class="muted">UID: ${escapeHtml(p.uid)} • ${escapeHtml(p.role)}</div>
				</div>
			</div>
		`;
		container.appendChild(card);
	});
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
	el.innerHTML = `
		<div class="profile-card">
			<div class="profile-head">
				<div class="avatar large">${makeAvatarInitials(player.name)}</div>
				<div class="profile-meta">
					<h2>${escapeHtml(player.name)}</h2>
					<p class="muted">UID: ${escapeHtml(player.uid)} • ${escapeHtml(player.role)}</p>
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
