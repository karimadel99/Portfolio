export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 w-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span className="block text-sm text-slate-400 sm:text-center">
          © {new Date().getFullYear()}{' '}
          <a
            href="https://github.com/karimadel99"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
          >
            Karim Adel
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
