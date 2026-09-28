import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Command } from 'cmdk';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  FaHome, FaUser, FaFolderOpen, FaEnvelope, FaMoon, FaSun,
  FaFileAlt, FaGithub, FaLinkedin, FaCopy, FaExternalLinkAlt,
} from 'react-icons/fa';
import { useTheme } from '@/hooks/useTheme';
import { projects } from '@/data/projects';

const EMAIL = 'karim.adel9922@gmail.com';
const RESUME_URL = '/resume.pdf';

export default function CommandPalette({ open, setOpen }) {
  const navigate = useNavigate();
  const { theme, toggle } = useTheme();
  const reduced = useReducedMotion();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setOpen]);

  useEffect(() => {
    if (!open) setCopied(false);
  }, [open]);

  const close = useCallback(() => setOpen(false), [setOpen]);

  const run = (fn) => () => {
    fn();
    close();
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(close, 650);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
      close();
    }
  };

  const pages = [
    { label: 'Index', to: '/', icon: <FaHome /> },
    { label: 'About', to: '/about', icon: <FaUser /> },
    { label: 'Work', to: '/projects', icon: <FaFolderOpen /> },
    { label: 'Contact', to: '/contact', icon: <FaEnvelope /> },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[14vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink/30 dark:bg-black/50 backdrop-blur-[3px]"
            onClick={close}
            aria-hidden="true"
          />

          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: -14, scale: 0.98 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative w-full max-w-xl"
          >
            <Command
              label="Command palette"
              className="cmdk-panel"
              onKeyDown={(e) => {
                if (e.key === 'Escape') close();
              }}
            >
              <div className="flex items-center gap-3 border-b border-rule px-4">
                <span className="mono text-orange text-sm" aria-hidden="true">{'>'}</span>
                <Command.Input
                  autoFocus
                  placeholder="Type a command or search…"
                  className="cmdk-input"
                />
                <kbd className="mono text-[0.62rem] text-ink-3 border border-rule px-1.5 py-0.5">ESC</kbd>
              </div>

              <Command.List className="cmdk-list">
                <Command.Empty className="px-4 py-8 text-center mono text-sm text-ink-3">
                  No results — try “work” or “theme”.
                </Command.Empty>

                <Command.Group heading="Navigate" className="cmdk-group">
                  {pages.map(({ label, to, icon }) => (
                    <Command.Item
                      key={to}
                      onSelect={run(() => navigate(to))}
                      className="cmdk-item"
                    >
                      <span className="cmdk-icon">{icon}</span>
                      {label}
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group heading="Actions" className="cmdk-group">
                  <Command.Item onSelect={run(toggle)} className="cmdk-item" keywords={['dark', 'light', 'mode']}>
                    <span className="cmdk-icon">{theme === 'dark' ? <FaSun /> : <FaMoon />}</span>
                    Switch to {theme === 'dark' ? 'light' : 'dark'} mode
                  </Command.Item>
                  <Command.Item onSelect={copyEmail} className="cmdk-item" keywords={['email', 'mail']}>
                    <span className="cmdk-icon"><FaCopy /></span>
                    {copied ? 'Copied ✓' : 'Copy email address'}
                  </Command.Item>
                  <Command.Item
                    onSelect={run(() => window.open(RESUME_URL, '_blank', 'noopener'))}
                    className="cmdk-item"
                    keywords={['cv', 'resume']}
                  >
                    <span className="cmdk-icon"><FaFileAlt /></span>
                    Open resume
                    <span className="ml-auto text-ink-3 text-[0.65rem]" aria-hidden="true">↗</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={run(() => window.open('https://github.com/karimadel99', '_blank', 'noopener'))}
                    className="cmdk-item"
                  >
                    <span className="cmdk-icon"><FaGithub /></span>
                    GitHub
                    <span className="ml-auto text-ink-3 text-[0.65rem]" aria-hidden="true">↗</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={run(() => window.open('https://www.linkedin.com/in/karim-adel-961506222/', '_blank', 'noopener'))}
                    className="cmdk-item"
                  >
                    <span className="cmdk-icon"><FaLinkedin /></span>
                    LinkedIn
                    <span className="ml-auto text-ink-3 text-[0.65rem]" aria-hidden="true">↗</span>
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Projects" className="cmdk-group">
                  {projects
                    .filter((p) => p.demo)
                    .map((p) => (
                      <Command.Item
                        key={p.title}
                        onSelect={run(() => window.open(p.demo, '_blank', 'noopener'))}
                        className="cmdk-item"
                        keywords={p.tags}
                      >
                        <span className="cmdk-icon"><FaExternalLinkAlt /></span>
                        {p.title}
                        <span className="ml-auto mono text-[0.62rem] text-ink-3">{p.year}</span>
                      </Command.Item>
                    ))}
                </Command.Group>
              </Command.List>

              <div className="flex items-center gap-4 border-t border-rule px-4 py-2.5 mono text-[0.62rem] text-ink-3">
                <span><kbd className="border border-rule px-1 py-0.5">↑↓</kbd> navigate</span>
                <span><kbd className="border border-rule px-1 py-0.5">↵</kbd> select</span>
                <span className="ml-auto text-orange">karim.dev</span>
              </div>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
