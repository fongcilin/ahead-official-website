This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Structure

```
ahead-official-website/
├── Caddyfile                    # Caddy web server configuration for reverse proxy
├── components.json              # shadcn/ui components configuration
├── docker-compose.yml           # Docker services orchestration configuration
├── dockerfile                   # Docker container build instructions
├── eslint.config.ts            # ESLint configuration for code linting
├── Makefile                    # Build automation and common commands
├── next.config.ts              # Next.js application configuration
├── package.json                # Node.js dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration for CSS processing
├── README.md                   # Project documentation and setup guide
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript compiler configuration
├── app/                        # Next.js App Router directory structure
│   ├── favicon.ico            # Website favicon
│   ├── footer.tsx             # Global footer component
│   ├── globals.css            # Global CSS styles and Tailwind imports
│   ├── google-analytics.tsx   # Google Analytics integration component
│   ├── handle-the-rest.tsx    # Catch-all route handler component
│   ├── header.tsx             # Global header component
│   ├── highlights-carousel.tsx # Homepage highlights carousel component
│   ├── highlights.tsx         # Homepage highlights section component
│   ├── layout.tsx             # Root layout component with metadata
│   ├── not-found.tsx          # Custom 404 error page
│   ├── page.tsx               # Homepage component
│   ├── partnership.tsx        # Partnership section component
│   ├── robots.ts              # Robots.txt generation
│   ├── sitemap.ts             # XML sitemap generation
│   ├── about/                 # About page route
│   │   └── page.tsx          # About page component
│   ├── api/                   # API routes directory
│   │   ├── news/             # News API endpoints
│   │   │   └── [tag]/        # Dynamic news tag filtering
│   │   └── publications/     # Publications API endpoints
│   │       └── [tag]/        # Dynamic publications tag filtering
│   ├── contact/              # Contact page route
│   │   └── page.tsx         # Contact page component
│   ├── news/                # News section routes
│   │   ├── news-area.tsx    # News listing area component
│   │   ├── news-link-badges.tsx # News category badges component
│   │   ├── page.tsx         # Main news page component
│   │   └── [tag]/           # Dynamic news tag pages
│   │       └── page.tsx     # Tagged news page component
│   ├── publications/         # Publications section routes
│   │   ├── page.tsx         # Main publications page component
│   │   ├── publications-area.tsx # Publications listing area component
│   │   ├── publications-link-badges.tsx # Publications category badges
│   │   ├── [tag]/           # Dynamic publications tag pages
│   │   │   └── page.tsx     # Tagged publications page component
│   │   └── id/              # Individual publication routes
│   │       └── [id]/        # Dynamic publication detail pages
│   ├── security-policy/      # Security policy page route
│   │   └── page.tsx         # Security policy page component
│   └── trial/               # Trial page route
│       └── page.tsx         # Trial page component
├── components/              # Reusable React components directory
│   ├── icons.tsx           # Custom icon components
│   ├── typography.tsx      # Typography utility components
│   ├── custom/             # Project-specific custom components
│   │   ├── contact-form.tsx # Contact form component
│   │   ├── link-badges.tsx # Category link badges component
│   │   ├── news-item.tsx   # Individual news item component
│   │   └── pink-cells-parallax.tsx # Parallax background component
│   └── ui/                 # shadcn/ui components directory
│       ├── accordion.tsx   # Collapsible content component
│       ├── aspect-ratio.tsx # Aspect ratio utility component
│       ├── badge.tsx       # Badge/tag component
│       ├── button.tsx      # Button component variants
│       ├── carousel.tsx    # Image/content carousel component
│       ├── dialog.tsx      # Modal dialog component
│       ├── form.tsx        # Form handling components
│       ├── input.tsx       # Input field component
│       ├── label.tsx       # Form label component
│       ├── navigation-menu.tsx # Navigation menu component
│       ├── sheet.tsx       # Side drawer/sheet component
│       ├── sonner.tsx      # Toast notification component
│       └── textarea.tsx    # Textarea input component
├── lib/                    # Utility libraries and helpers
│   └── utils.ts           # Common utility functions and class name helpers
└── public/                # Static assets directory
    ├── images/            # Image assets directory
    │   ├── ahead_logo.png # Company logo PNG format
    │   ├── erythrocytes.png # Scientific cell imagery
    │   ├── banner/        # Homepage banner images
    │   ├── news/          # News article images
    │   ├── parallax/      # Parallax background images
    │   ├── partnership/   # Partnership related images
    │   ├── publications/  # Publication related images
    │   └── team/          # Team member photos
    └── pdfs/              # PDF document assets
        └── pdf.worker.min.js # PDF.js worker for client-side PDF rendering
```

## Getting Started

For Dev:
Install NVM
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

Install the Required Node.js Version
For Next.js projects, it's recommended to use Node.js version 20 or higher:
```bash
nvm install 20
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## About the `import` syntax of React

[React Typescript](https://react.dev/learn/typescript)

- For type, no need to import, just use React.SomeType [ex. React.ReactNode]
- For others, use `import { useSomeHook, someFunction } from 'react'` [ex. `import { useState, createContext } from 'react'`]

## The width and height from Image (Nextjs)

`Image with src "xxx/xxxxx/xx" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.`

If see this warning, check the `Rendered size:` from `Elements` tab in browser's console, and use the width and height from it.

## About react-pdf error in Nextjs

`Warning: Error: Setting up fake worker failed: "Failed to fetch dynamically imported module: https://cdnjs.cloudflare.com/ajax/libs/pdf.js/[PDFJS_VERSION]/pdf.worker.min.js".`

1. This error is about using `pdf.worker.min.js` on cdn, but it only has really old version on cdn. So go to `node_modules/pdfjs-dist/build/pdf.worker.min.mjs` and copy the whole code.
2. Create a file `/public/pdfs/pdf.worker.min.js` and paste the code into the file.
3. Add rule in `.eslintrc.json` and `prettierignore` for avoiding detecting and formatting `/public/pdfs/pdf.worker.min.js`.
4. For `Warning: TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer` and `Warning: AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations`.

- ```js
  import 'react-pdf/dist/esm/Page/TextLayer.css';
  import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
  ```

## Deploy to vercel (For DEV)

1. `npm install -g vercel`
2. `vercel --version` for checking the library is ready or not
3. `vercel login`
4. `cd /path/to/your/nextjs-project`
5. Every time modifying the codebase, run `vercel` again. But this will make a new domain, so use `vercel --prod` for overlapping the previous one.

## Deploy to Nangang Server (For Production)
```
# Start the services
docker-compose up -d
# Check if containers are running
docker-compose ps

# View logs if needed
docker-compose logs -f
```

Updating the Application
# Pull latest code changes
git pull

# Rebuild and restart containers
```
docker-compose down
docker-compose build
docker-compose up -d
```
## Security Scan with trivy

To run a security scan on docker image, use the following command:

```bash
make scan
```

## Mobile-First Responsive Design

This project follows a mobile-first responsive design approach using Tailwind CSS breakpoints:

### Breakpoint Strategy
- **Base (< 640px)**: Mobile-first styles, minimum 320px width support
- **sm (640px)**: Small tablets and large phones
- **md (768px)**: Tablets and small desktops
- **lg (1024px)**: Desktops
- **xl (1280px)**: Large desktops

### Key Features
1. **Safe Area Inset**: Supports notched devices (iPhone X and later)
   - Use `.safe-area-inset` utility class for horizontal padding
   - Use `.safe-area-inset-bottom` for bottom padding

2. **Touch Target Compliance**: Minimum 44x44px touch targets for iOS
   - Use `.touch-target` utility class to ensure minimum size

3. **iOS Zoom Prevention**: Input font size is 16px on mobile to prevent auto-zoom
   - Automatically applied to all text inputs, textareas, and selects
   - Scales down to 14px on desktop (md breakpoint)

4. **Image Optimization**:
   - Progressive loading with `priority` and `loading` attributes
   - Responsive `sizes` attribute for optimal image delivery
   - iOS-specific rendering fixes included

### Testing Responsive Layout

Run Playwright e2e tests across multiple breakpoints:

```bash
# Run tests in Docker
make test

# View test report
make test-report

# Run tests with UI (requires local Playwright installation)
make test-ui
```

Test coverage includes:
- Mobile (375px - iPhone)
- Tablet (768px - iPad)
- Desktop (1280px)
- Desktop Large (1920px - Full HD)

### Development Guidelines

1. **Always start with mobile styles** (no breakpoint prefix)
2. **Use progressive enhancement** with `sm:`, `md:`, `lg:`, `xl:` prefixes
3. **Test on actual devices** or use browser DevTools device emulation
4. **Avoid fixed widths** - use `max-w-*` and `min-w-*` instead
5. **Ensure no horizontal scroll** at any breakpoint

