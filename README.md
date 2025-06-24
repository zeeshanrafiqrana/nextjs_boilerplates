# Next.js Boilerplate

This project is a Next.js boilerplate with Material-UI (MUI), Tailwind CSS, TypeScript, and a recommended folder structure for scalable applications.

## Folder Structure

```
eslint.config.js
next-env.d.ts
next.config.ts
package.json
postcss.config.mjs
tsconfig.json
app/
  layout.tsx
  page.tsx
  about/
    page.tsx
  api/
  components/
    Layout.tsx
    Page.tsx
  hooks/
  lib/
  styles/
    globals.css
public/
  file.svg
  globe.svg
  next.svg
  vercel.svg
  window.svg
```

- **app/**: Main application folder (Next.js App Router).  
  - `layout.tsx`: Root layout for all pages.  
  - `page.tsx`: Main entry page.  
  - `about/`: Example sub-route.  
  - `api/`: API route handlers.  
  - `components/`: Reusable React components.  
  - `hooks/`: Custom React hooks.  
  - `lib/`: Utility functions and libraries.  
  - `styles/`: Global and modular CSS (e.g., `globals.css`).
- **public/**: Static assets (SVGs, images, etc.).
- **next.config.ts**: Next.js configuration.
- **tsconfig.json**: TypeScript configuration.
- **postcss.config.mjs**: PostCSS configuration (with Tailwind CSS).
- **eslint.config.js**: ESLint configuration.
- **package.json**: Project metadata and scripts.

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

## Tech Stack
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material-UI (MUI)](https://mui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

## Notes
- Use the `@/*` alias for imports from the `src` directory (configured in `tsconfig.json`).
- Customize the folder structure as your project grows.
- For more details, see the comments in each config file.
