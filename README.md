This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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
