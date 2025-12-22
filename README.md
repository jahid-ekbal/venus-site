# Venus Free Fire - Static Site

# Venus - Static Site

A small static website for VENUS — an esports organization. This repository contains the site pages, styles, and a tiny client-side script.

**Pages**

- [index.html](index.html) — landing / entry
- [home.html](home.html) — home overview
- [overview.html](overview.html) — ORGANIZATION OVERVIEW (updated)
- [player.html](player.html) — player profiles
- [esports.html](esports.html) — esports teams & squads

- [digital-services.html](digital-services.html) — services offered
- [creators.html](creators.html) — creators & media
- [tryouts.html](tryouts.html) — tryout details

## What I updated

- `overview.html`: Replaced the main content with an animated, colorful overview section (animated gradient text and emoji accents). Linked a new `css/overview.css` file for animations.
- `css/overview.css`: New file providing gradient text animation and emoji effects.
- Developer watermark and profile: Added a persistent site watermark and a developer info/ad card on the home page with contact links (GitHub, LinkedIn, Facebook, Discord) for the developer.
- UI/Interaction updates: Added a CSS-only gradient hover for buttons and JS-enhanced tracking for precise gradient placement, plus a Reptile interactive cursor (head + trailing dots) applied site-wide.
- Home page UX: The "Esports Division" card on the home page now navigates to `esports.html` when clicked.
- `css/style.css` and `js/app.js` updated to implement the above features.
- `README.md`: This file was updated to include recent changes and developer contact information.

## Developer

This site now includes a developer credit/watermark and a developer info card on the home page for quick contact. Developer:

- Name: Jahid Ekbal
- GitHub: https://github.com/jahid-ekbal
- LinkedIn: https://www.linkedin.com/in/jahid-developer
- Facebook: https://www.facebook.com/jahidekbalmallick
- Discord server: https://discord.gg/YUMJdPtBDR

If you want the developer card removed, hidden by default, or styled differently, tell me how you'd prefer it to appear.

## Quick scan

I ran a basic static scan and checked CSS and JS modules used by the site; no syntax errors were found.

## Security & optimization updates

- Server hardening: added Helmet security headers (CSP, HSTS, frameguard, etc.), rate limiting on auth endpoints, and safer cookie/session settings in `server/index.js`.
- OAuth safety: added input validation, request timeouts, and improved error handling for the Discord OAuth flow.
- Inline scripts were moved to `js/app.js` so a stricter CSP can be applied.
- Dependency updates: added `helmet` and `express-rate-limit` to `server/package.json`.

### How to run the server and check security

1. Install server deps and run an audit:

```powershell
cd server
npm install
npm audit
npm start
```

2. For development with auto-reload (requires nodemon):

```powershell
npm run dev
```

If you'd like, I can also add ESLint / Stylelint configuration, and an automated `npm run build` step to minify and bundle assets for production.

Tip: For continuous dependency security updates, enable GitHub Dependabot or a similar service to automatically open PRs for vulnerable packages; you can then review and merge or run `npm audit fix` to apply fixes automatically.

## Commit history (how to add it here)

I couldn't run `git` in the current environment to grab commits automatically. To produce a compact commit list you can paste into this README, run this locally from the repo root:

```bash
git --no-pager log --pretty=format:"%h | %ad | %s | %an" --date=short -n 200 > commits.txt
```

Then copy the contents of `commits.txt` and paste them under a "Commits" heading below.

Example placeholder:

```
<commit-hash> | <date> | <message> | <author>
... paste your commit lines here ...
```

## Viewing locally

Start a simple static server and open your browser:

```powershell
cd "C:\Users\JAHID\Documents\GitHub\venus-site"
python -m http.server 8000
# then open http://localhost:8000/
```

## Notes

- The overview page uses `css/overview.css` for animated gradient text and emoji animations. The site respects `prefers-reduced-motion` where possible.
- Player data is in `js/app.js` for demo purposes.

If you'd like, I can: run local style tweaks, add manager/squad tables to the overview page, or insert real commit output if you run the `git` command and paste results here.
