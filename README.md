# Next.js Boilerplate

This project is a Next.js boilerplate using the App Router, TypeScript, Tailwind CSS, and Material UI, with a modern, scalable folder structure.

## Folder Structure

```
eslint.config.js
next-env.d.ts
next.config.ts
package.json
postcss.config.mjs
README.md
tsconfig.json
app/
  layout.tsx
  page.tsx
  about/
    page.tsx
  api/
    index.ts
  components/
    Layout.tsx
    Page.tsx
  hooks/
    index.ts
  lib/
    utils.ts
  styles/
    globals.css
public/
  file.svg
  globe.svg
  next.svg
  vercel.svg
  window.svg
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**

   ```bash
   npm run build
   npm start
   ```

4. **Lint the code:**
   ```bash
   npm run lint
   # Or to fix issues automatically
   npm run lint:fix
   ```

## Project Structure Guidance

- All main app code lives in the `app/` directory, using the [Next.js App Router](https://nextjs.org/docs/app).
- `app/layout.tsx`: Root layout for all pages.
- `app/page.tsx`: Main entry page.
- `app/about/page.tsx`: Example sub-route.
- `app/api/index.ts`: Example API route.
- `app/components/`: Reusable React components.
- `app/hooks/`: Custom React hooks.
- `app/lib/`: Utility functions and libraries.
- `app/styles/globals.css`: Global styles (imported in `layout.tsx`).
- `public/`: Static assets (SVGs, images, etc.).

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Material UI](https://mui.com/)
- [ESLint](https://eslint.org/)

## Notes

- Use the `@/` alias for imports from the `app/` directory (configured in `tsconfig.json`).
- Edit `app/styles/globals.css` for global styles.
- Place static files in the `public/` directory.
- For more details, see the comments in each config file.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)
