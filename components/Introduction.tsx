export default function Introduction() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            About Me
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            I build across technology, AI, and creative work.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-zinc-600">
            I work across web development, Python and data, AI-assisted
            workflows, and digital content. I enjoy turning ideas into practical
            projects and combining technical skills with creative
            problem-solving.
          </p>

          <a
            href="/about"
            className="mt-6 inline-block text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            More About Me →
          </a>
        </div>
      </div>
    </section>
  );
}
