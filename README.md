# Cyber Security Team Builder

A React (Vite) frontend app to build your dream cyber security team.

## Features
- Select experts from a list (data from `public/expert.json`)
- Add to cart, see total cost and count
- Clean, modern UI (plain CSS)
- Ready for Vercel deployment

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production (Vercel):
   ```bash
   npm run build
   ```
   Output: `dist/`

## Project Structure
- `public/expert.json` — Data source (edit as needed)
- `src/components/Expert.jsx` — Expert card
- `src/components/Cart.jsx` — Cart panel
- `src/App.jsx` — Main app

## Deployment
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

---
No backend, no external APIs. All data is local.
