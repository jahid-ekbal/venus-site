This small server provides Discord OAuth integration for the static `venus-site` project.

Features

-   Starts an Express server that serves the static site from the repo root
-   Implements `/auth/discord` and `/auth/discord/callback` for OAuth2 code flow
-   Sets a session cookie with minimal user info
-   Provides `/api/me` that returns the current session user

Quick start

1. Install dependencies

```bash
cd server
npm install
```

2. Copy `.env.example` to `.env` and fill `CLIENT_ID` and `CLIENT_SECRET` (use a Discord OAuth2 application)

3. Run the server

```bash
npm start
```

4. Open http://localhost:3000

Notes and next steps

-   The server checks membership of `GUILD_ID` in the OAuth `guilds` response. For stronger validation you may run a bot and query `/guilds/{guild.id}/members/{user.id}` using a bot token.
-   To automatically update user profiles when somebody joins the Discord server, create a Discord bot that listens for `GUILD_MEMBER_ADD` and calls a server-side endpoint to create/update the profile.
-   For production, secure cookies (https), better session store, CSRF protections, and proper error handling are required.
