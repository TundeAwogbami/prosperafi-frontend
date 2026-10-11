# ProsperaFi — Frontend (Vite + React + TypeScript)

The platform provides intuitive wallet connectivity, portfolio management, token swaps, and staking interfaces, designed for both casual users and advanced DeFi participants. It emphasizes performance, usability, and modular architecture while maintaining strong security and reliability.

---

## Key Features

- Multi-chain support (Ethereum mainnet, Polygon, BNB Chain)
- Portfolio and dashboard views with charts and token icons
- Swap and staking UIs (components exist in `src/components/swap` and `src/components/staking`)
- Supabase integration for auth and persistence (see `supabase/`)
- Server-state caching with `@tanstack/react-query`
- Form handling and validation with `react-hook-form` + `zod`
- Extensive Radix/shadcn-style UI primitives in `src/components/ui`

---

## Project Structure

```
public/                     # Static assets
src/
	components/               # UI components (dashboard, portfolio, staking, swap)
	lib/                      # utilities and helpers
	providers/                # app providers (QueryClient, etc.)
	pages/                    # routes / pages
	hooks/                    # custom hooks
	data/                     # mock data and fixtures
	integrations/             # supabase client and types
	App.tsx, main.tsx, styles  # app entry
supabase/                    # local supabase config / project (not the runtime DB secrets)
vite.config.ts
package.json
```

---

### Installation

```sh
# 1. Clone the repository
git clone https://github.com/TundeAwogbami/prosperafi-frontend.git
cd prosperafi-frontend

# 2. Install dependencies (root)
npm install

# 3. Run the project
npm run dev

```

## Tech stack & notable libraries

- Vite + React 18 + TypeScript
- Tailwind CSS + `tailwindcss-animate`
- Radix UI / shadcn-style primitives in `src/components/ui`
- `@supabase/supabase-js` for auth and persistence
- `@tanstack/react-query` for server state
- `react-hook-form` + `zod` for forms & validation
- `recharts`, `framer-motion` for charts and animations

---
