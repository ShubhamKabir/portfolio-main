const experience = [
  {
    period: "2026 — Present",
    role: "AI Training & Data Annotation Specialist",
    company: "DataAnnotation",
    description:
      "Work involving response ranking, classification, error checking, prompt writing, and structured quality evaluation in English and Hindi.",
  },
  {
    period: "2025 — Present",
    role: "YouTube Channel Management",
    company: "UK-based Gaming Channel",
    description:
      "Managing a gaming YouTube channel covering research, content strategy, optimization, and audience-focused publishing.",
  },
  {
    period: "2020 — Present",
    role: "Freelance Developer",
    company: "Fiverr + Independent Clients",
    description:
      "100+ freelance projects across 70+ clients, covering web development, technical work, digital content, and creative projects.",
  },
  {
    period: "2018 — Present",
    role: "YouTube Content Creator",
    company: "YouTube",
    description:
      "Creating gaming, technology, tutorial, review, and gameplay content, with 500+ videos published since 2018.",
  },
  {
    period: "2016 — 2017",
    role: "Engineer",
    company: "Shivshakti Enterprises",
    description:
      "Professional engineering experience following a B.E. in Computer Engineering.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Experience
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            A timeline built across technology and digital work.
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-black/10 pt-6">
            <div>
              <p className="text-2xl font-semibold tracking-tight">100+</p>
              <p className="mt-1 text-sm text-zinc-500">Freelance projects</p>
            </div>

            <div>
              <p className="text-2xl font-semibold tracking-tight">70+</p>
              <p className="mt-1 text-sm text-zinc-500">Clients</p>
            </div>

            <div>
              <p className="text-2xl font-semibold tracking-tight">500+</p>
              <p className="mt-1 text-sm text-zinc-500">YouTube videos</p>
            </div>

            <div>
              <p className="text-2xl font-semibold tracking-tight">1.7M+</p>
              <p className="mt-1 text-sm text-zinc-500">Views on one video</p>
            </div>
          </div>
        </div>

        <div className="border-t border-black/10">
          {experience.map((item) => (
            <article
              key={`${item.period}-${item.role}`}
              className="group border-b border-black/10 py-8 transition-colors hover:bg-black/[0.02] md:py-9"
            >
              <div className="grid gap-4 md:grid-cols-[140px_1fr] md:gap-8">
                <p className="font-mono text-xs text-zinc-400">{item.period}</p>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                    {item.role}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-zinc-500">
                    {item.company}
                  </p>

                  <p className="mt-3 max-w-xl leading-7 text-zinc-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
