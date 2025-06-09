# Personal Website

This project is a simple React + TypeScript website built with Vite. It contains a main landing page and a placeholder for language learning articles.

## Available Scripts

- `npm run dev` &mdash; start the development server.
- `npm run build` &mdash; build the application for production.
- `npm run preview` &mdash; preview the production build locally.
- `npm run lint` &mdash; run ESLint using the configuration in `eslint.config.js`.

## Development

Install dependencies with `npm install` and then run `npm run dev` to start a local server. The application will be available at `http://localhost:5173` by default.

## Project Structure

- `src/` &mdash; React components and pages.
- `public/` &mdash; static assets served at the root.
- `tsconfig.*.json` &mdash; TypeScript configuration files.

## Notes

The project uses path aliases configured in `tsconfig.json`. If TypeScript reports errors about referenced projects, ensure that the `composite` option is enabled in `tsconfig.app.json` and `tsconfig.node.json` (already included).
