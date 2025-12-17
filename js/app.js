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
    name: "VNS killing",
    uid: "1847118333",
    discord: "vnskilling",
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
  {
    id: "p22",
    name: "VNS RAFSAN",
    uid: "2261174135",
    discord: "hacker247.",
    dob: "",
    avatar: "",
    role: "Analyst",
    bio: "Data-driven playstyle.",
    kdr: "—",
    wins: 0,
  },
  {
    id: "p23",
    name: "VNS UNITY",
    uid: "6783313046",
    discord: "nvb_fake",
    dob: "",
    avatar: "",
    role: "Analyst",
    bio: "Data-driven playstyle.",
    kdr: "—",
    wins: 0,
  },
  {
    id: "p24",
    name: "VNS shondip",
    uid: "2450478155",
    discord: "adminshondip0376",
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

  // Build cards with DOM methods to avoid accidental HTML injection and stray markup
  PLAYERS.forEach((p) => {
    const card = document.createElement("a");
    card.className = "card player-card flip-card";
    card.href = `player.html?id=${encodeURIComponent(p.id)}`;

    const inner = document.createElement("div");
    inner.className = "flip-inner";

    const front = document.createElement("div");
    front.className = "flip-front";

    const imgDiv = document.createElement("div");
    imgDiv.className = "card-image";
    if (p.avatar) {
      imgDiv.style.backgroundImage = `url('${escapeHtml(p.avatar)}')`;
    } else {
      imgDiv.style.background =
        "linear-gradient(135deg, var(--flame-orange), var(--flame-red))";
      imgDiv.style.display = "flex";
      imgDiv.style.alignItems = "center";
      imgDiv.style.justifyContent = "center";
      imgDiv.style.fontWeight = "700";
      imgDiv.style.color = "#fff";
      imgDiv.textContent = makeAvatarInitials(p.name);
    }

    const title = document.createElement("div");
    title.className = "card-title";
    title.textContent = p.name;

    front.appendChild(imgDiv);
    front.appendChild(title);

    const back = document.createElement("div");
    back.className = "flip-back";

    const desc = document.createElement("div");
    desc.className = "card-desc";
    desc.textContent = `UID: ${p.uid} • ${p.role}`;

    const btn = document.createElement("a");
    btn.className = "btn";
    btn.href = `player.html?id=${encodeURIComponent(p.id)}`;
    btn.textContent = "View Profile";

    back.appendChild(desc);
    back.appendChild(btn);

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
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
        inviteCode,
      )}?with_counts=true`,
    );
    if (!invRes.ok) return;
    const invJson = await invRes.json();
    const guildId = invJson.guild && invJson.guild.id;
    if (!guildId) return;

    // Fetch widget.json for the guild (requires widget enabled on server)
    const widgetRes = await fetch(
      `https://discord.com/api/guilds/${encodeURIComponent(
        guildId,
      )}/widget.json`,
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
    document.querySelectorAll(".discord-status[data-discord]").forEach((el) => {
      const discordUsername = el.getAttribute("data-discord");
      if (!discordUsername) return;
      if (onlineUsernames.has(String(discordUsername).toLowerCase())) {
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
  const avatarBlock =
    player.avatar ?
      `<img src="${escapeHtml(player.avatar)}" alt="${escapeHtml(
        player.name,
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
            player.discord || "-",
          )} <span class="discord-status" data-discord="${escapeHtml(
            player.discord,
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
  return String(s || "").replace(/[&<>\"]/g, function (m) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m];
  });
}

// Reptile interactive cursor - lightweight JS that creates a custom cursor and adds hover states
function initReptileCursor() {
  if (typeof document === "undefined") return;
  try {
    if (document.body.querySelector(".reptile-cursor")) return; // already init
    const cursor = document.createElement("div");
    cursor.className = "reptile-cursor";
    cursor.innerHTML =
      '<div class="reptile-head"></div><div class="reptile-tail"></div>';
    document.body.appendChild(cursor);
    document.body.classList.add("reptile-enabled");
    const head = cursor.querySelector(".reptile-head");
    const tail = cursor.querySelector(".reptile-tail");
    let lastX = 0,
      lastY = 0;
    document.addEventListener(
      "mousemove",
      (e) => {
        const x = e.clientX;
        const y = e.clientY;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
        // subtle tail movement
        tail.style.left = x - 18 + "px";
        tail.style.top = y - 8 + "px";
        lastX = x;
        lastY = y;
      },
      { passive: true },
    );

    // enlarge cursor on interactive elements
    const interactiveSelector = "a, button, .btn, input, .nav-link";
    document.querySelectorAll(interactiveSelector).forEach((el) => {
      el.addEventListener("mouseenter", () =>
        cursor.classList.add("reptile-hover"),
      );
      el.addEventListener("mouseleave", () =>
        cursor.classList.remove("reptile-hover"),
      );
    });
  } catch (e) {
    console.warn("Reptile cursor init failed", e);
  }
}

// Mouse gradient tracking for buttons — sets CSS variables for the ::after pseudo (enhancement but gracefully degrades to pure CSS centered effect)
function initButtonGradientTracking() {
  if (typeof document === "undefined") return;
  const selector =
    '.btn, button, .nav-link, input[type="button"], input[type="submit"]';
  document.querySelectorAll(selector).forEach((el) => {
    el.addEventListener(
      "mousemove",
      (ev) => {
        const rect = el.getBoundingClientRect();
        const x = ((ev.clientX - rect.left) / rect.width) * 100;
        const y = ((ev.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty("--mx", x + "%");
        el.style.setProperty("--my", y + "%");
      },
      { passive: true },
    );
    el.addEventListener("mouseleave", () => {
      el.style.setProperty("--mx", "50%");
      el.style.setProperty("--my", "50%");
    });
  });
}

// Initialize profile button: queries /api/me to determine login state and show avatar
async function initProfileButton() {
  const btn = document.getElementById("profileBtn");
  const avatar = document.getElementById("profileAvatar");
  if (!btn || !avatar) return;
  try {
    const res = await fetch("/api/me", { credentials: "include" });
    if (res.ok) {
      const user = await res.json();
      if (user && user.id && user.avatar) {
        avatar.src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=64`;
      } else if (user && user.id) {
        // fallback to default logo when user has no custom avatar
        avatar.src = "img/logo/output-onlinegiftools.gif";
      }
      btn.href = "/profile.html";
      btn.title = `Signed in as ${user.username || user.id}`;
    } else {
      // not authenticated
      btn.href = "/auth/discord";
      btn.title = "Sign in with Discord";
      avatar.src = "img/logo/output-onlinegiftools.gif";
    }
  } catch (e) {
    btn.href = "/auth/discord";
    btn.title = "Sign in with Discord";
    avatar.src = "img/logo/output-onlinegiftools.gif";
  }
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

  // initialize navbar profile button (will attempt to call /api/me)
  initProfileButton();

  // Nav toggle for mobile - support multiple toggles and accessible behaviors
  (function initNavToggle() {
    const toggles = Array.from(document.querySelectorAll(".nav-toggle"));
    const navs = Array.from(document.querySelectorAll(".main-nav"));
    function setNavOpen(open) {
      document.body.classList.toggle("nav-open", open);
      toggles.forEach((t) =>
        t.setAttribute("aria-expanded", open ? "true" : "false"),
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
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
        setNavOpen(false);
      }
    });
    document.addEventListener(
      "click",
      (e) => {
        if (!document.body.classList.contains("nav-open")) return;
        const inside =
          e.target.closest(".main-nav") || e.target.closest(".nav-toggle");
        if (!inside) {
          setNavOpen(false);
        }
      },
      { capture: true },
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
        e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX) || 0;
      const y =
        e.clientY || (e.touches && e.touches[0] && e.touches[0].clientY) || 0;
      makeDot(x, y);
    }
    window.addEventListener("pointermove", onPointerMove, {
      passive: true,
    });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
  })();
});

// Venus Free Fire - Site utilities

/* Reptile interactive cursor + enhanced button gradient tracking
   - Adds a smooth trailing cursor (head + tails) that reacts to hovering interactive elements
   - Adds optional JS-based per-button gradient tracking by updating --mx / --my CSS vars
   - Gracefully respects prefers-reduced-motion */
(function initReptileCursor() {
  if (typeof window === "undefined") return;
  const reduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return; // keep things simple for reduced motion
  if ("ontouchstart" in window) return; // avoid on touch devices where native pointer is used

  // Create cursor container
  const cursor = document.createElement("div");
  cursor.className = "reptile-cursor";
  const head = document.createElement("div");
  head.className = "reptile-head";
  cursor.appendChild(head);

  const tails = [];
  const TAIL_COUNT = 6;
  for (let i = 0; i < TAIL_COUNT; i++) {
    const t = document.createElement("div");
    t.className = "reptile-tail";
    cursor.appendChild(t);
    tails.push({ el: t, x: window.innerWidth / 2, y: window.innerHeight / 2 });
  }

  document.body.appendChild(cursor);
  document.body.classList.add("reptile-enabled");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let headX = mouseX;
  let headY = mouseY;

  function lerp(a, b, n) {
    return (1 - n) * a + n * b;
  }

  window.addEventListener(
    "pointermove",
    (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    },
    { passive: true },
  );

  function animate() {
    // head follows mouse with smoothing
    headX = lerp(headX, mouseX, 0.22);
    headY = lerp(headY, mouseY, 0.22);
    head.style.transform = `translate3d(${headX}px, ${headY}px, 0) translate(-50%, -50%)`;

    // tails follow the previous point creating a fluid reptile-like trail
    let prevX = headX,
      prevY = headY;
    tails.forEach((t, idx) => {
      const n = 0.16 - idx * 0.018;
      t.x = lerp(t.x, prevX, n);
      t.y = lerp(t.y, prevY, n);
      t.el.style.transform = `translate3d(${t.x}px, ${t.y}px, 0) translate(-50%, -50%) scale(${1 - idx * 0.08})`;
      prevX = t.x;
      prevY = t.y;
    });

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  // Enlarge/activate cursor on interactive elements and update button gradient CSS variables
  const interactiveSelector =
    'button, .btn, a, .card, .card a, .nav-link, .creator-card, input[type="button"], input[type="submit"]';
  const interactives = document.querySelectorAll(interactiveSelector);
  interactives.forEach((el) => {
    el.addEventListener("pointerenter", () =>
      cursor.classList.add("reptile-hover"),
    );
    el.addEventListener("pointerleave", () =>
      cursor.classList.remove("reptile-hover"),
    );

    // Update per-element CSS variables so the gradient pseudo-element will track the pointer precisely
    el.addEventListener(
      "pointermove",
      (ev) => {
        const rect = el.getBoundingClientRect();
        const x = ev.clientX - rect.left;
        const y = ev.clientY - rect.top;
        // set --mx and --my for CSS fallback gradient to use
        el.style.setProperty("--mx", x + "px");
        el.style.setProperty("--my", y + "px");
      },
      { passive: true },
    );
  });

  // Hide cursor when focusing inputs to avoid obstructing text entry
  document.addEventListener("pointerdown", (e) => {
    const t = e.target;
    if (
      t.tagName === "INPUT" ||
      t.tagName === "TEXTAREA" ||
      t.isContentEditable
    ) {
      cursor.style.opacity = "0";
    }
  });
  document.addEventListener("pointerup", () => (cursor.style.opacity = "1"));
})();

// Lightweight site behaviors (kept minimal for safety)
(function siteBehaviors() {
  if (typeof document === "undefined") return;
  document.addEventListener("DOMContentLoaded", () => {
    // intentionally minimal: features initialize elsewhere
  });
})();
