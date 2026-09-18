export default function ResumePage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:pb-20 md:pt-28">
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Resume
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            A concise overview of my experience and skills.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Explore my professional experience, technical skills, education,
            freelance work, and content background.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              Professional Summary
            </p>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-zinc-600">
              Computer Engineering graduate with experience across freelancing,
              web development, Python, data analysis, AI-assisted workflows, and
              digital content. I have completed 100+ freelance projects for 70+
              clients and have created 500+ YouTube videos since 2018.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm text-zinc-400">Education</p>
                <h2 className="mt-2 text-lg font-semibold">
                  B.E. Computer Engineering
                </h2>
                <p className="mt-1 text-sm text-zinc-500">SIEM Nashik · 2016</p>
              </div>

              <div>
                <p className="text-sm text-zinc-400">Location</p>
                <h2 className="mt-2 text-lg font-semibold">Lucknow, India</h2>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Python",
                "SQL",
                "Pandas",
                "Data Analysis",
                "React",
                "Next.js",
                "AI Workflows",
                "Prompt Engineering",
                "Content",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-black/10 px-4 py-2 text-sm text-zinc-600"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-12 border-t border-black/10 pt-8">
              <p className="text-sm text-zinc-500">
                For the complete details of my experience, skills, projects, and
                education, view my full resume.
              </p>

              <a
                href="/Resume_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
              >
                View / Download Resume →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
