export default function Footer() {
  return (
    <footer className="bg-white w-full shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{' '}
          <a
            href="https://github.com/karimadel99"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Karim Adel
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
