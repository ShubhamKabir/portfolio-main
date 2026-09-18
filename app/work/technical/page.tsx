const projects = [
  {
    number: "01",
    category: "Python · SQL · Data",
    title: "SQL + Python Data Analysis",
    description:
      "A practical data analysis project combining SQL, Python, and Pandas to work with structured data and turn it into useful insights.",
    href: "https://github.com/ShubhamKabir/sql-python-data-analysis-v2",
  },
  {
    number: "02",
    category: "Python · AI",
    title: "AI Technical Support Assistant",
    description:
      "A Python-based assistant designed to analyze technical issues, identify relevant troubleshooting information, and provide structured support responses.",
    href: "https://github.com/ShubhamKabir/ai-support-assistant",
  },
  {
    number: "03",
    category: "AI · Content",
    title: "AI YouTube Growth Assistant",
    description:
      "An AI-assisted workflow for researching gaming topics, generating video ideas, improving titles and thumbnails, and supporting content strategy.",
    href: "https://github.com/ShubhamKabir/ai-youtube-growth-assistant",
  },
  {
    number: "04",
    category: "React · Web",
    title: "React Task Manager + User Search",
    description:
      "A React project combining task management with user search functionality, built as a practical exploration of frontend development.",
    href: "https://github.com/ShubhamKabir/react-task-manager",
  },
];

export default function TechnicalProjectsPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:pb-20 md:pt-28">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Technical Projects
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Python, data, AI, and web projects.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            A collection of technical projects exploring Python, SQL, data
            analysis, AI-assisted workflows, and frontend development.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group rounded-3xl border border-black/10 bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] sm:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <p className="text-sm text-zinc-500">
                  {project.number} / {project.category}
                </p>

                <span className="text-sm text-zinc-400 transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              <div className="mt-16">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
                  Technical Project
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                  {project.title}
                </h2>

                <p className="mt-4 max-w-lg leading-7 text-zinc-600">
                  {project.description}
                </p>
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                View on GitHub →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
