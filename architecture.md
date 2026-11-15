# Repository Architecture

## Purpose

Keep the browser-facing client, server-side code, documentation and tests separated so each part can evolve independently.

## Directory boundaries

- `client/`: static frontend assets and browser entry point.
- `server/`: HTTP server and API boundary.
- `docs/`: audit evidence, architecture decisions and setup instructions.
- `tests/`: automated smoke tests and future accessibility regression tests.
- `screenshots/`: manually captured screenshots and Lighthouse output; do not commit sensitive data.

## Request flow

```text
Browser
  |
  v
client/index.html
  |
  | HTTP request
  v
server/server.js
  |
  v
JSON response
```

The current app is intentionally a minimal foundation, not a production service. There is no database, authentication, personal data collection or external API integration.

## Local setup

1. Install Node.js 18 or newer.
2. Run `npm install`.
3. Run `npm run dev`.
4. Visit `http://localhost:3000`.

## First vertical feature slice

The first feature slice is a simple health/status endpoint:

- `GET /api/health`
- Returns JSON `{ "status": "ok" }`
- A smoke test verifies the endpoint.

## Future improvements

- Add linting and formatting.
- Add Playwright tests for keyboard navigation and accessibility checks.
- Add a CI workflow to run tests on every pull request.
- Keep accessibility evidence dated and tied to the exact tested URL/build.
