import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './App.jsx';
import './index.css';

// Prerendered at build time (`vite-react-ssg build`), hydrated in the browser.
export const createRoot = ViteReactSSG({ routes });
