export default function Resume() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="grid gap-10 border-t border-black/10 pt-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:pt-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Resume
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Want the full picture?
          </h2>
        </div>

        <div>
          <p className="max-w-xl leading-7 text-zinc-600">
            Explore my background, experience, skills, education, and
            professional work in one place.
          </p>

          <a
            href="/Resume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
          >
            View / Download Resume →
          </a>
        </div>
      </div>
    </section>
  );
}
