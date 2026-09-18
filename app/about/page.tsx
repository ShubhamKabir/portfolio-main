export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:pb-20 md:pt-28">
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            About
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            A multidisciplinary path across technology and creativity.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              Background
            </p>
          </div>

          <div className="max-w-3xl space-y-6 text-lg leading-8 text-zinc-600">
            <p>
              I’m Shubham Adarsh Kabir, a Computer Engineering graduate based in
              Lucknow, India. My work has grown across technology, freelancing,
              content creation, and digital projects rather than following a
              single path.
            </p>

            <p>
              I started my professional career in engineering and later moved
              into freelance and digital work. Since 2018, I’ve also been
              building and publishing content on YouTube, exploring gaming,
              technology, tutorials, reviews, and other forms of digital media.
            </p>

            <p>
              Over time, my technical interests have expanded into Python, SQL,
              data analysis, web development, AI-assisted workflows, and
              automation. I enjoy working on practical projects where technology
              can turn an idea into something useful.
            </p>

            <p>
              Today, I work across technical projects, freelance work, content,
              and AI-assisted workflows while continuing to build deeper skills
              and new digital projects.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="group rounded-3xl border border-black/10 bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-400">
              Technology
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
              Building practical systems
            </h2>

            <p className="mt-3 leading-7 text-zinc-600">
              Python, SQL, data analysis, web development, AI-assisted
              workflows, and automation.
            </p>
          </div>

          <div className="group rounded-3xl border border-black/10 bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-400">
              Freelance
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
              Solving real client needs
            </h2>

            <p className="mt-3 leading-7 text-zinc-600">
              More than 100 freelance projects across 70+ clients through Fiverr
              and independent work.
            </p>
          </div>

          <div className="group rounded-3xl border border-black/10 bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-400">
              Content
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
              Creating and experimenting
            </h2>

            <p className="mt-3 leading-7 text-zinc-600">
              500+ YouTube videos since 2018 across gaming, technology,
              tutorials, reviews, and gameplay.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
