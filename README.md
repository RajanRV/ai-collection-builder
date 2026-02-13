# AI Collection Builder

A Next.js app for building donation and group gift collections. Use the dashboard to choose collection types, then create group gift campaigns from scratch or with the AI generator (Groq + Stability AI).

## Features

- **Dashboard** – Collection types (e.g. Online Shop, Group Gifts, Forms) and fundraiser options
- **Group Gifts** – Templates and “create from scratch” or “Use AI to create”
- **AI Generator** – Describe your group gift; get AI-generated title, description, and campaign image

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Lucide React (icons)

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Install

```bash
npm install
```

### Environment variables

Copy the example env file and set your API keys:

```bash
cp .env.example .env
```

Edit `.env` and set:

| Variable             | Required | Description |
|----------------------|----------|-------------|
| `GROQ_API_KEY`       | Yes      | [Groq](https://console.groq.com/) API key for LLM content |
| `STABILITY_API_KEY`  | Yes      | [Stability AI](https://platform.stability.ai/) key for images |
| `GROQ_MODEL`         | No       | Groq model (default: `llama-3.3-70b-versatile`) |

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build and run production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project structure

- `src/app/` – App Router pages and layouts (`page.tsx`, `layout.tsx`, `error.tsx`, `not-found.tsx`, `global-error.tsx`)
- `src/app/api/` – API routes (e.g. `ai-generator` for AI generation)
- `src/components/` – UI components (`ui/`, `common/`, `ai-generator/`)
- `src/hooks/` – Custom hooks (`useAiGenerator`, `useDonations`)
- `src/types/` – TypeScript types and `env.d.ts`
- `src/constants/` – App constants
- `src/utils/` – Utilities (validation, env, logger)
- `src/data/` – Static JSON data
- `public/` – Static assets (icons, images, fonts)

## API

### POST `/api/ai-generator`

Generates donation campaign content (title, description, image) from a short requirement.

**Body:** `{ "requirement": "string" }` (max 400 chars; should be donation/fundraiser-related)

**Response:** `{ "title": "string", "description": "string", "imageBase64": "string" }`

Errors return `{ "error": "string" }` with status 400 or 502.

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Deploying on Vercel](https://nextjs.org/docs/app/building-your-application/deploying)

## Future Enhancements
- For now kept minimal components and written html code to the `page.tsx`. 