/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // CSS-variable driven so .dark class fully re-themes.
        paper:         'rgb(var(--c-paper) / <alpha-value>)',
        'paper-2':     'rgb(var(--c-paper-2) / <alpha-value>)',
        ink:           'rgb(var(--c-ink) / <alpha-value>)',
        'ink-2':       'rgb(var(--c-ink-2) / <alpha-value>)',
        'ink-3':       'rgb(var(--c-ink-3) / <alpha-value>)',
        rule:          'rgb(var(--c-rule) / <alpha-value>)',
        blue:          'rgb(var(--c-blue) / <alpha-value>)',
        'blue-lit':    'rgb(var(--c-blue-lit) / <alpha-value>)',
        'blue-ghost':  'rgb(var(--c-blue) / 0.08)',
        orange:        'rgb(var(--c-orange) / <alpha-value>)',
        'orange-deep': 'rgb(var(--c-orange-deep) / <alpha-value>)',
        'orange-ghost':'rgb(var(--c-orange) / 0.10)',
        success:       'rgb(var(--c-success) / <alpha-value>)',
      },
      letterSpacing: {
        'tightest':  '-0.05em',
        'editorial': '-0.025em',
        'micro':      '0.18em',
      },
      animation: {
        'marquee':     'marquee 40s linear infinite',
        'marquee-rev': 'marquee 40s linear infinite reverse',
        'caret':       'caret 1.05s steps(2) infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        caret: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
