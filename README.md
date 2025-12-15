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
- [guilds.html](guilds.html) — guild information
- [tryouts.html](tryouts.html) — tryout details

## What I updated

- `overview.html`: Replaced the main content with an animated, colorful overview section (animated gradient text and emoji accents). Linked a new `css/overview.css` file for animations.
- `css/overview.css`: New file providing gradient text animation and emoji effects.
- `README.md`: This updated project summary and instructions for adding commit history.

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
