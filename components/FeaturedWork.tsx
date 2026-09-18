import { featuredProjects } from "./portfolioData";

export default function FeaturedWork() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Selected Work
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Real projects across technology, AI, and creative work.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <article
            key={project.number}
            className="group rounded-3xl border border-black/10 bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] sm:p-10"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex gap-3 text-sm text-zinc-500">
                <span>{project.number}</span>
                <span>/</span>
                <span>{project.category}</span>
              </div>

              <span className="text-sm text-zinc-400 transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </div>

            <div className="mt-16">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
                {project.type}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                {project.title}
              </h3>

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
              {project.linkLabel}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
