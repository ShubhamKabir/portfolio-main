export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl items-center px-6 py-24"
    >
      <div className="max-w-5xl">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Python · AI · Web · Creative Work
        </p>

        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-8xl">
          Shubham
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">
          Building across technology and creativity — from websites and
          AI-assisted workflows to data, content, and digital projects.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            Explore My Work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium transition-colors hover:bg-black/5"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
