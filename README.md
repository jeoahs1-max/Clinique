# JEOAH'S EMR — Full Starter Repository

Starter for the **JEOAH'S EMR** project.

Structure:
- /frontend — React app (minimal)
- /backend — Express API mock
- /firebase — firebase.json + functions mock
- /device_bridge — mock bridge for devices
- /assets — prototype.html, technical_spec.md, locales

Quick local run with Docker:
1. Install Docker & docker-compose
2. From repo root: `docker-compose up --build`
3. Frontend: http://localhost:3000
   Backend API: http://localhost:4000
   Device bridge: http://localhost:6000

Deploy to Firebase:
1. Build frontend: `cd frontend && npm run build`
2. `firebase deploy --only hosting,functions`

Notes:
- Replace mock logic with production code
- Add Postgres & migrations for persistence
- Secure environment variables
