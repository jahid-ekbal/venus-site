# Venus Free Fire - Static Site

This is a static HTML/CSS/JS demo site for a Free Fire esports organization.

Features

-   Responsive, mobile-first design
-   Flame-themed branding and animated flame pointer trail
-   Guild players list with per-player profiles (client-side rendered)
-   Accessible nav with keyboard skip-link and focus states

How to run locally

1. Open cmd.exe
2. Run:

```cmd
cd C:\Users\username\folder name\venus-site
python -m http.server 8000
```

3. Open http://localhost:8000/ in your browser.

Notes

-   The flame pointer animation respects `prefers-reduced-motion`.
-   Player data is stored in `js/app.js` (client-side) for demo purposes.

Next steps you might want

-   Replace avatar initials with real images in `img/players/` and update `js/app.js` to use them.
-   Add server-side registration or persistent storage if needed.
-   Provide a Figma/PSD for pixel-perfect matching; I can tune typography and spacing to match.
