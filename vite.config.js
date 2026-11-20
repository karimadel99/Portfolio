import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';
import viteImagemin from 'vite-plugin-imagemin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    viteImagemin({
      webp: { quality: 80 },
      optipng: { optimizationLevel: 5 },
      mozjpeg: { quality: 80 },
      svgo: { plugins: [{ name: 'removeViewBox', active: false }] },
    }),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  ssgOptions: {
    entry: 'src/main.jsx',
    dirStyle: 'flat', // /about -> about.html; served at /about via cleanUrls in vercel.json
    // Skip the client-only catch-all route; /404 is prerendered as 404.html.
    includedRoutes: (paths) => paths.filter((p) => !p.includes('*') && !p.includes(':')),
  },
  build: {
    rollupOptions: {
      // Vendor chunking applies to the browser build only; the SSR (prerender)
      // build externalizes these packages and rejects manualChunks for them.
      output: isSsrBuild ? {} : {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['react-icons'],
        },
      },
    },
  },
}));
