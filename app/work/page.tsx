const categories = [
  {
    number: "01",
    title: "Web Projects",
    description:
      "Websites and frontend projects built with modern web technologies.",
    href: "/work/web",
    status: "Coming Soon",
  },
  {
    number: "02",
    title: "Technical Projects",
    description:
      "Python, SQL, data analysis, AI projects, and technical experiments.",
    href: "/work/technical",
    status: "Explore",
  },
  {
    number: "03",
    title: "Fiverr & Freelance",
    description:
      "Client work and independent projects completed across different digital and technical needs.",
    href: "/work/freelance",
    status: "Explore",
  },
  {
    number: "04",
    title: "YouTube & Content",
    description:
      "Gaming, technology, tutorials, reviews, gameplay, and content strategy.",
    href: "/work/youtube",
    status: "Explore",
  },
  {
    number: "05",
    title: "Creative Work",
    description:
      "Creative and digital projects that don't fit neatly into the technical categories.",
    href: "/work/creative",
    status: "Coming Soon",
  },
];

export default function WorkPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:pb-20 md:pt-28">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Work
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            A broader look at what I build and create.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Explore projects and work across web development, Python, data, AI,
            freelancing, YouTube, and creative digital work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="divide-y divide-black/10 border-t border-black/10">
          {categories.map((category) => {
            const isComingSoon = category.status === "Coming Soon";

            return (
              <a
                key={category.number}
                href={category.href}
                className="group grid gap-6 py-8 transition-colors hover:bg-black/[0.02] sm:grid-cols-[120px_1fr_auto] sm:items-center"
              >
                <span className="text-sm text-zinc-400">{category.number}</span>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                      {category.title}
                    </h2>

                    {isComingSoon && (
                      <span className="rounded-full border border-black/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-400">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <p className="mt-2 max-w-2xl leading-7 text-zinc-600">
                    {category.description}
                  </p>
                </div>

                <span className="text-sm text-zinc-400 transition-transform duration-300 group-hover:translate-x-1">
                  {isComingSoon ? "→" : "Explore →"}
                </span>
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}
