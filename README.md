# OfflineClean Landing Page

Landing page for OfflineClean - Smart Photo Cleanup App for iPhone.

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS 3.3
- React Router 6
- Lucide React Icons

## Features

- Mobile-first responsive design
- Dark/Light theme toggle
- Multi-language support (EN/TR)
- SEO optimized
- GitHub Pages deployment with Actions

## Getting Started

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Deployment

The site automatically deploys to GitHub Pages when pushing to the `main` branch via GitHub Actions.

### Manual deployment

1. Build the project: `npm run build`
2. The `dist` folder contains the production-ready files

## Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React context providers
├── hooks/          # Custom React hooks
├── locales/        # Translation files
├── pages/          # Page components
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles

public/             # Static assets
```

## License

All rights reserved.
