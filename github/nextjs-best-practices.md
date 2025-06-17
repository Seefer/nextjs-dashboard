# Copilot Instructions for Next.js 15

## General Guidelines
- Use **TypeScript** for all components and utilities.
- Follow **ESLint and Biome** rules for formatting.
- Prefer **server components** where applicable for performance optimization.

## Next.js-Specific Conventions
- Use **App Router (`app/`)** instead of `pages/`.
- Implement **React Server Components** for efficient rendering.
- Handle API routes using **`app/api/`** with `route.ts`.

## Styling & UI
- Use **Tailwind CSS version 4** for styling.
- Prefer **shadcn/ui** for reusable components.
- Ensure accessibility (`aria-*` attributes) in all UI elements.

## Performance Optimization
- Enable **image optimization** using `next/image`.
- Use **Edge Functions** for dynamic content delivery.
- Optimize **server-side rendering (SSR)** where necessary.

## Deployment & CI/CD
- Deploy using **Vercel** with automatic builds.
- Set up **GitHub Actions** for linting and testing.
- Use **environment variables** securely via `.env.local`.

## Example Code Style
```tsx
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <Button>Click Me</Button>
    </main>
  );
}
