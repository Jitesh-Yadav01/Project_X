# AIT GDG Pune 

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-20-339933?logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-4-000000?logo=express&logoColor=white" alt="Express"/>
  <img src="https://img.shields.io/badge/Three.js-latest-000000?logo=threedotjs&logoColor=white" alt="Three.js"/>
  <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss&logoColor=white" alt="TailwindCSS"/>
</p>

> A modern, full‑stack website for **AIT GDG Pune** built with **React + Vite**, **Node.js + Express**, and optional **Three.js** for an animated 3D hero and event visualizations. Includes API, auth-ready scaffolding, and deploy recipes.

---

## 🔗 Demo & Links

* **Live**: `https://your-deployment-url.example` (replace after deploy)
* **Design/Preview**: `/docs/screens/` (add screenshots)
* **OpenAPI UI**: `/api/docs` (Swagger/Redoc when enabled)

---

## 🧭 Table of Contents

* [Features](#-features)
* [Tech Stack](#-tech-stack)
* [Monorepo Layout](#-monorepo-layout)
* [Quick Start](#-quick-start)

  * [Local (pnpm)](#local-pnpm)
  * [Docker](#docker)
  * [GitHub Codespaces](#github-codespaces)
* [Configuration](#-configuration)
* [Available Scripts](#-available-scripts)
* [API](#-api)
* [3D / Three.js](#-3d--threejs)
* [Testing & Quality](#-testing--quality)
* [CI/CD](#-cicd)
* [Deployment](#-deployment)
* [Contributing](#-contributing)
* [Roadmap](#-roadmap)
* [FAQ](#-faq)
* [License](#-license)

---

## ✨ Features

* ⚡️ **Fast React front‑end** (Vite + React 18, TypeScript, TailwindCSS)
* 🧰 **Express API** (REST), structured by feature modules
* 🔐 **Auth‑ready** (JWT + cookie-based session; plug in OAuth later)
* 🗓️ **Events & Speakers** pages + dynamic CMS-ready schemas
* 🎨 **Three.js scene** for animated hero / backgrounds
* 📱 **Responsive** and PWA-ready (optional)
* 🧪 **Testing** with Vitest/Jest + React Testing Library + Supertest
* 🧹 **ESLint/Prettier** & Git hooks via simple pre-commit
* 🚀 **One‑click deploy** recipes for Vercel/Render/Fly.io

---

## 🧱 Tech Stack

|               Layer | Tech                                                            |
| ------------------: | :-------------------------------------------------------------- |
|            Frontend | React 18, Vite, TypeScript, TailwindCSS                         |
|                  3D | Three.js (optionally with @react-three/fiber/@react-three/drei) |
|             Backend | Node.js 20, Express 4, Zod for validation                       |
| Database (optional) | PostgreSQL (Prisma), or MongoDB (Mongoose)                      |
|                Docs | Swagger (OpenAPI), Markdown in `/docs`                          |
|             Tooling | pnpm, Dotenv, ESLint, Prettier                                  |

---

## 🗂 Monorepo Layout

```
ait-gdg-pune/
├─ apps/
│  ├─ web/                # React + Vite front‑end
│  └─ api/                # Node + Express server
├─ packages/
│  ├─ ui/                 # Reusable UI (optional)
│  └─ config/             # ESLint/TS configs, shared scripts
├─ public/                # Static assets shared by web
├─ docker/                # Dockerfiles & compose
├─ docs/                  # Screenshots, ADRs, API docs
└─ .github/               # Workflows
```

> You can keep it simple with just `apps/web` and `apps/api` if you prefer.

---

## 🚀 Quick Start

### Local (pnpm)

> Prereqs: Node.js **≥ 20**, pnpm **≥ 9**, Git

```bash
# 1) Clone
git clone https://github.com/your-org/ait-gdg-pune.git
cd ait-gdg-pune

# 2) Install deps
pnpm install

# 3) Copy envs
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env

# 4) Start dev (concurrently runs web+api)
pnpm dev
```

Open:

* Frontend: [http://localhost:5173](http://localhost:5173)
* API: [http://localhost:4000](http://localhost:4000)
* API Docs: [http://localhost:4000/api/docs](http://localhost:4000/api/docs)

### Docker

```bash
# Build images & start both services
docker compose -f docker/compose.yml up --build
```

> Frontend and API will be available on the same ports via compose mapping.

### GitHub Codespaces

* Click **Use this template → Open in Codespaces**
* A devcontainer will boot, run `pnpm install` and `pnpm dev`

---

## ⚙️ Configuration

### Environment Variables

**`apps/api/.env`**

```
PORT=4000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
JWT_SECRET=replace_me
DATABASE_URL=postgresql://user:pass@localhost:5432/ait_gdg
# or for Mongo:
# MONGODB_URI=mongodb://127.0.0.1:27017/ait_gdg
```

**`apps/web/.env`**

```
VITE_API_URL=http://localhost:4000
VITE_ENABLE_3D=true
```

> If you add OAuth (Google Sign‑In), also add `GOOGLE_CLIENT_ID`/`GOOGLE_CLIENT_SECRET` to the API env.

---

## 🧰 Available Scripts

At repo root (using workspaces):

```bash
pnpm dev          # Run web + api together
pnpm build        # Build all workspaces
pnpm lint         # Lint all packages
pnpm test         # Run tests
pnpm format       # Prettier write
```

In **`apps/web`**:

```bash
pnpm dev       # Vite dev server
pnpm build     # Build static assets
pnpm preview   # Preview the production build
```

In **`apps/api`**:

```bash
pnpm dev       # Nodemon + ts-node (if TS) or node index.js
pnpm build     # tsc (if TS) or noop for JS
pnpm start     # start compiled server
```

---

## 🔌 API

**Base URL:** `http://localhost:4000`

<details>
<summary>Health</summary>

```http
GET /health
200 OK → { "status": "ok", "uptime": 123.45 }
```

</details>

<details>
<summary>Events</summary>

```http
GET /api/events           # list upcoming events
GET /api/events/:id       # event by id
POST /api/events          # create (auth required)
```

**Curl**

```bash
curl http://localhost:4000/api/events
```

</details>

<details>
<summary>Speakers</summary>

```http
GET /api/speakers
```

</details>

> API request/response schemas are validated with **Zod**. Add Swagger at `/api/docs` by enabling `swagger()` in the server.

---

## 🌀 3D / Three.js

Enable a tasteful animated background or hero.

* Base: **Three.js** scene, renderer, camera
* Optional: **@react-three/fiber** (R3F) for React‑friendly components
* Helpers: **@react-three/drei** (OrbitControls, Float, Environment)

**Example (vanilla Three.js in React effect):**

```tsx
// apps/web/src/components/Hero3D.tsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mount = mountRef.current!;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const geo = new THREE.IcosahedronGeometry(1.2, 1);
    const mat = new THREE.MeshStandardMaterial({ metalness: 0.3, roughness: 0.4, color: 0x3b82f6 });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 3);
    scene.add(light);

    let raf = 0;
    const onResize = () => {
      const { clientWidth: w, clientHeight: h } = mount;
      camera.aspect = w / h; camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const tick = () => {
      raf = requestAnimationFrame(tick);
      mesh.rotation.x += 0.005; mesh.rotation.y += 0.007;
      renderer.render(scene, camera);
    };

    window.addEventListener('resize', onResize);
    onResize();
    tick();

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); mount.removeChild(renderer.domElement); renderer.dispose(); };
  }, []);

  return <div className="h-[320px] w-full" ref={mountRef} />;
}
```

> Toggle via `VITE_ENABLE_3D=true` and lazy‑load the component for performance.

---

## 🧪 Testing & Quality

* **Frontend**: Vitest + React Testing Library
* **API**: Jest/Vitest + Supertest
* **Lint/Format**: ESLint + Prettier

Run all:

```bash
pnpm test && pnpm lint
```

Optional pre-commit hook:

```bash
npx simple-git-hooks
```

---

## 🔄 CI/CD

* GitHub Actions:

  * `ci.yml` → install, build, test, lint
  * `deploy.yml` → deploy on tag to your host

---

## ☁️ Deployment

### Vercel (Frontend)

* Import `apps/web`
* Build: `pnpm --filter web build`
* Output: `apps/web/dist`

### Render/Fly.io/Railway (API)

* Start command: `pnpm --filter api start`
* Set environment variables from **Configuration** section

> For a single-provider deploy, use **Railway** with both services and a Postgres addon.

---

## 🤝 Contributing

We love contributions from the AIT & GDG community!

1. Fork → feature branch: `feat/component-xyz`
2. Commit using **Conventional Commits** (`feat:`, `fix:`, `docs:`)
3. `pnpm dev` and ensure lint/tests pass
4. PR with description & screenshots

Code style:

```bash
pnpm lint
pnpm format
```

---

## 🗺 Roadmap

* [ ] Content CMS (e.g., Contentful/Sanity/Strapi)
* [ ] Google Sign‑In via OAuth
* [ ] Event RSVP & Check‑in QR
* [ ] Admin dashboard
* [ ] Blog with MDX
* [ ] i18n (English → Marathi/Hindi)
* [ ] Accessibility audit (WCAG 2.2 AA)

---

## ❓ FAQ

<details>
<summary>Do I need Three.js to run the site?</summary>
No — set `VITE_ENABLE_3D=false` and the 3D components won't load.
</details>

<details>
<summary>Can I use npm instead of pnpm?</summary>
Yes. Replace `pnpm` with `npm run` where applicable and run `npm i` for installs.
</details>

<details>
<summary>Where are images and static assets?</summary>
Put shared assets in `/public`. Vite serves them from the root at `/`.
</details>

---

## 📜 License

MIT © AIT GDG Pune Community

---

### 🧩 Appendix: Minimal Express server (snippet)

```ts
// apps/api/src/index.ts
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok', uptime: process.uptime() }));

app.listen(process.env.PORT || 4000, () => {
  console.log(`API running on :${process.env.PORT || 4000}`);
});
```

### 🧩 Appendix: Minimal React entry (snippet)

```tsx
// apps/web/src/App.tsx
import Hero3D from './components/Hero3D';

export default function App() {
  const enable3D = import.meta.env.VITE_ENABLE_3D === 'true';
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <section className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold">AIT GDG Pune</h1>
        <p className="mt-2 text-slate-600">Events, community, and resources for developers at AIT.</p>
        {enable3D && <div className="mt-8"><Hero3D /></div>}
      </section>
    </main>
  );
}
```
