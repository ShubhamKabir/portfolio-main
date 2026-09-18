const projects = [
  {
    number: "01",
    category: "AI SaaS",
    title: "VERA",
    description:
      "An AI SaaS product experience combining intelligent research workflows with a warm editorial visual language and a darker technical interface.",
    details:
      "Product presentation, workflow sections, interface previews, editorial content, and responsive layouts.",
    tech: "Next.js · React · TypeScript · Tailwind",
    image: "/web/01-vera.png",
    live: "https://vera-three-gamma.vercel.app/",
    source: "https://github.com/ShubhamKabir/web-projects/tree/master/vera",
  },
  {
    number: "02",
    category: "Restaurant",
    title: "EMBER",
    description:
      "A contemporary restaurant web experience centered around atmosphere, hospitality, and fire-led cuisine.",
    details:
      "Immersive hero, restaurant story, menu, signature dishes, dining experience, gallery, reservations, and location.",
    tech: "Next.js · React · TypeScript · Tailwind",
    image: "/web/02-ember.png",
    live: "https://ember-gules-alpha.vercel.app/",
    source: "https://github.com/ShubhamKabir/web-projects/tree/master/ember",
  },
  {
    number: "03",
    category: "Startup",
    title: "NOVA",
    description:
      "A fictional startup and product experience focused on bold visual communication and interactive product presentation.",
    details:
      "Product presentation, interactive previews, feature sections, use cases, pricing, testimonials, and responsive layouts.",
    tech: "Next.js · React · TypeScript · Tailwind",
    image: "/web/03-nova.png",
    live: "https://nova-opal-nine.vercel.app/",
    source: "https://github.com/ShubhamKabir/web-projects/tree/master/nova",
  },
  {
    number: "04",
    category: "Creative Agency",
    title: "FORM",
    description:
      "A creative agency web experience focused on art direction, typography, visual identity, and editorial presentation.",
    details:
      "Studio introduction, selected work, services, approach, capabilities, large typography layouts, and contact.",
    tech: "Next.js · React · TypeScript · Tailwind",
    image: "/web/04-form.png",
    live: "https://form-tau-beige.vercel.app/",
    source: "https://github.com/ShubhamKabir/web-projects/tree/master/form",
  },
  {
    number: "05",
    category: "E-commerce",
    title: "ATLAS",
    description:
      "A premium lifestyle e-commerce experience combining product discovery with editorial storytelling and a fashion-inspired visual system.",
    details:
      "Shop, categories, product details, local cart state, checkout interface, journal, about, and responsive layouts.",
    tech: "Next.js · React · TypeScript · Tailwind",
    image: "/web/05-atlas.png",
    live: "https://atlas-mauve-theta.vercel.app/",
    source: "https://github.com/ShubhamKabir/web-projects/tree/master/atlas",
  },
  {
    number: "06",
    category: "Web App",
    title: "PULSE",
    description:
      "A functional project-management web application bringing projects, tasks, schedules, teams, and activity into one workspace.",
    details:
      "Dashboard, projects, tasks, calendar, team, activity, settings, authentication screens, and local front-end state.",
    tech: "Next.js · React · TypeScript · Tailwind",
    image: "/web/06-pulse.png",
    live: "https://pulse-tau-five-51.vercel.app/dashboard",
    source: "https://github.com/ShubhamKabir/web-projects/tree/master/pulse",
  },
  {
    number: "07",
    category: "WebGL · Research",
    title: "PROJECT HADAL",
    description:
      "An immersive fictional deep-sea research archive combining cinematic exploration, scientific discovery, and interactive underwater telemetry.",
    details:
      "Persistent WebGL environment, scroll-driven descent, sonar, specimen discovery, scientific HUD, laboratory interface, and research archive.",
    tech: "Next.js · React · Three.js · React Three Fiber · GSAP · Lenis",
    image: "/web/07-project-hadal.png",
    live: "https://project-hadal.vercel.app/",
    source:
      "https://github.com/ShubhamKabir/web-projects/tree/master/project-hadal",
  },
];

export default function WebProjectsPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:pb-20 md:pt-28">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Web Projects
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Websites, applications, and digital experiences.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            A collection of web projects exploring product design, editorial
            experiences, creative direction, e-commerce, applications, and
            interactive digital experiences.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.number}
              className="overflow-hidden rounded-3xl border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_16px_50px_rgba(0,0,0,0.07)]"
            >
              <div className="grid md:grid-cols-[1.15fr_0.85fr]">
                <div className="flex min-h-[300px] items-center justify-center bg-zinc-100 p-4 sm:min-h-[380px] sm:p-6 md:min-h-[460px]">
                  <img
                    src={project.image}
                    alt={`${project.title} website preview`}
                    className="max-h-[460px] w-full object-contain"
                  />
                </div>

                <div className="flex flex-col justify-between p-8 sm:p-10 md:p-12">
                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <p className="text-sm text-zinc-500">
                        {project.number} / {project.category}
                      </p>

                      <span className="text-sm text-zinc-400">↗</span>
                    </div>

                    <div className="mt-14">
                      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        {project.title}
                      </h2>

                      <p className="mt-5 leading-7 text-zinc-600">
                        {project.description}
                      </p>

                      <p className="mt-6 text-sm leading-6 text-zinc-500">
                        {project.details}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-zinc-400">
                      {project.tech}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
                        >
                          Live Site ↗
                        </a>
                      ) : null}

                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-black/20 hover:bg-black/[0.03]"
                      >
                        Source ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
