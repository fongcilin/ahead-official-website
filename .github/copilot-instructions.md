# AHEAD Medicine Official Website - AI Development Guide

## Tech Stack & Architecture

- **Framework**: Next.js 16 (App Router) with React 19, TypeScript, TailwindCSS
- **UI Components**: shadcn/ui with Radix UI primitives + custom variants
- **Deployment**: Docker + Caddy reverse proxy (production), Makefile automation
- **Node Version**: >=22.0.0 required (see `package.json` engines)
- **Testing**: Playwright for e2e responsive layout testing

## Mobile-First Responsive Design

### Breakpoint Strategy
This project follows a **mobile-first** responsive design approach:

- **Base (< 640px)**: Mobile-first styles, minimum 320px width support
- **sm (640px)**: Small tablets and large phones  
- **md (768px)**: Tablets and small desktops
- **lg (1024px)**: Desktops
- **xl (1280px)**: Large desktops

### Development Guidelines
1. **Always start with mobile styles** (no breakpoint prefix)
2. **Use progressive enhancement** with `sm:`, `md:`, `lg:`, `xl:` prefixes
3. **Avoid fixed widths** - use `max-w-*` and `min-w-*` instead of `w-[600px]`
4. **Use responsive padding**: `px-4 sm:px-6 md:px-8 lg:px-12`
5. **Ensure no horizontal scroll** at any breakpoint

### Key CSS Utilities (in `app/globals.css`)

```css
/* Safe area inset for notched devices */
.safe-area-inset { padding-left: max(env(safe-area-inset-left), 1rem); }
.safe-area-inset-bottom { padding-bottom: env(safe-area-inset-bottom); }

/* Minimum touch target (44x44px for iOS) */
.touch-target { min-width: 44px; min-height: 44px; }

/* Auto 16px font on mobile to prevent iOS zoom */
input, textarea, select { font-size: 16px; }
@media (min-width: 768px) { input, textarea, select { font-size: 0.875rem; } }
```

### Testing Responsive Layouts

Run Playwright e2e tests across breakpoints:
```bash
make test           # Run in Docker
make test-report    # View HTML report
make test-ui        # Interactive UI mode (local)
```

Test coverage: Mobile (375px), Tablet (768px), Desktop (1280px, 1920px)

## Project Structure

### Data-Driven Content Pattern
News and publications are **data files, not CMS**:
- Static data in `app/api/[resource]/[tag]/data.ts` (e.g., `newsList` array)
- Server-side filtering in `server-fetches.ts` exports
- API routes at `app/api/[resource]/[tag]/route.ts` handle pagination via `cursor` and `count` params
- Client components fetch via `/api/news/[tag]?cursor=0&count=9`

**Example**: To add news, append to `newsList` in `app/api/news/[tag]/data.ts`:
```typescript
{
  id: "unique-url",
  url: "external-link",
  image: "/images/news/filename.png",
  tag: "press_chinese" | "press_english" | "conference",
  title: "Title",
  is_highlight: true, // for homepage carousel
  footer: [{ variant: "border", text: "Press (English)" }, { variant: "normal", text: "2025-12-11" }]
}
```

### iOS-Specific Workarounds
Project includes iOS image rendering fixes:
- `hooks/use-ios-image-fix.ts`: Retry mechanism for failed image loads
- `components/ios-image-fixes.tsx`: Global iOS detection and fixes
- `app/layout.tsx`: Viewport configuration for iOS (`maximumScale: 1`, `userScalable: false`)

When adding images, always consider iOS Safari compatibility.

## Development Workflows

### Local Development
```bash
npm run dev          # Turbopack dev server
npm run lint         # ESLint check
npm run prettier-fix-all  # Auto-format all files
```

### Docker Deployment
Use `Makefile` commands (not raw docker-compose):
```bash
make setup    # Create external_network (required first time)
make build    # Build Docker image
make up       # Start services (Next.js + Caddy)
make deploy   # git pull + rebuild + restart (production workflow)
make logs-nextjs  # Tail Next.js logs
```

**Critical**: Dockerfile uses multi-stage builds with `node:23-alpine`. Production stage runs as non-root user `nextjs:nodejs`.

### Caddy Configuration
- Reverse proxy: `nextjs:3000` → `aheadmedicine.com`
- Auto HTTPS with ACME (Let's Encrypt)
- Cache headers: `/_next/static/*` (1 year), `/images/*` (1 day)
- Security headers: HSTS, X-Content-Type-Options, CSP for SVG

## Code Conventions

### Component Patterns
1. **shadcn/ui variants**: Extend via `cva()` (see `components/ui/button.tsx` for "gray-outline" custom variant)
2. **Client components**: Mark with `'use client'` when using hooks/events (e.g., `contact-form.tsx`)
3. **Server components**: Default for pages; use async/await for data fetching (see `app/news/page.tsx`)

### Styling
- Use `cn()` utility from `lib/utils.ts` for conditional classes (Tailwind merge + clsx)
- Gradient pattern: `bg-gradient-to-r from-orange-400 via-red-500 to-red-600 bg-clip-text text-transparent` (brand colors)

### Forms & Validation
- Zod schemas with `react-hook-form` + `@hookform/resolvers` (see `contact-form.tsx`)
- Toast notifications via `sonner` library
- Google Analytics tracking: Use `trackEvent()` from `lib/utils.ts` (client-side only)

## Key File References

- **Static data**: `app/api/news/[tag]/data.ts`, `app/api/publications/[tag]/data.ts`
- **Reusable layouts**: `app/header.tsx`, `app/footer.tsx`, `app/layout.tsx`
- **Custom components**: `components/custom/` (project-specific), `components/ui/` (shadcn)
- **Docker config**: `dockerfile` (multi-stage), `docker-compose.yml` (health checks, memory limits)
- **Reverse proxy**: `Caddyfile` (HTTPS, caching, security headers)

## Common Tasks

**Add a new page route**: Create `app/[route]/page.tsx` (server component by default)
**Add API endpoint**: Create `app/api/[endpoint]/route.ts` with exported `GET`/`POST` functions
**Install shadcn component**: `npx shadcn@latest add [component]` (updates `components/ui/`)
**Deploy to production**: SSH to server → `cd /path/to/repo` → `make deploy`

## Production Gotchas

- Health check endpoint: `/api/health` (used by Docker healthcheck)
- Memory limits: 2GB in docker-compose (prevents OOM on build)
- Image optimization: Next.js serves via `/_next/image` (cached 1 year)
- PDF.js worker: `public/pdfs/pdf.worker.min.js` for client-side PDF rendering (`app/publications/id/[id]/pdf-viewer.tsx`)

## Environment Requirements

- Node.js >=22.0.0 (enforced in `package.json` and Dockerfile)
- External Docker network `external_network` must exist (run `make setup`)
- Caddy handles SSL cert renewal automatically (stored in `caddy_data` volume)
