import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Background from '../Background/Background';

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <Background />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ink focus:text-paper focus:rounded-none focus:font-mono focus:text-sm"
      >
        Skip to main content
      </a>

      <Nav />

      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          id="main-content"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
          className="pt-20"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  );
}
