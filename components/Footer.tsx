export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500">
          © 2026 Shubham. Built with curiosity.
        </p>

        <div className="flex flex-wrap gap-5 text-sm">
          <a
            href="https://github.com/ShubhamKabir"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shubham-kabir-415615193"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            LinkedIn
          </a>

          <a
            href="https://www.youtube.com/@ArkRayDen"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            YouTube
          </a>

          <a
            href="https://www.fiverr.com/s/3AGD69B"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            Fiverr
          </a>
        </div>
      </div>
    </footer>
  );
}
