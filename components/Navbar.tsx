export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f7f5]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center px-6 py-5">
        <a
          href="#hero"
          className="mr-auto hidden text-lg font-semibold tracking-tight md:block"
        >
          Shubham
        </a>

        <div className="flex items-center gap-4 text-sm md:gap-6">
          <a href="/about" className="transition-opacity hover:opacity-60">
            About
          </a>

          <a href="/work" className="transition-opacity hover:opacity-60">
            Work
          </a>

          <a href="#experience" className="transition-opacity hover:opacity-60">
            Experience
          </a>

          <a href="/resume" className="transition-opacity hover:opacity-60">
            Resume
          </a>

          <a href="#contact" className="transition-opacity hover:opacity-60">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
