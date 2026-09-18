const categories = [
  {
    number: "01",
    title: "Web Projects",
    description:
      "Websites, interfaces, and digital experiences built with modern web technologies.",
    href: "/work/web",
  },
  {
    number: "02",
    title: "Technical Projects",
    description: "Python, SQL, AI, data, and practical software projects.",
    href: "/work/technical",
  },
  {
    number: "03",
    title: "Fiverr & Freelance",
    description:
      "Client work across development, technical services, research, and digital content.",
    href: "/work/freelance",
  },
  {
    number: "04",
    title: "YouTube & Content",
    description:
      "Gaming and technology content created from research through publishing and optimization.",
    href: "/work/youtube",
  },
  {
    number: "05",
    title: "Creative Work",
    description:
      "Creative and digital media work developed across different formats and projects.",
    href: "/work/creative",
  },
];

export default function ExploreWork() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Explore More Work
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            More ways to explore what I do.
          </h2>

          <p className="mt-5 max-w-md leading-7 text-zinc-600">
            Browse the different areas of my work, from technical projects and
            client work to YouTube and creative projects.
          </p>
        </div>

        <div className="border-t border-black/10">
          {categories.map((category) => (
            <a
              key={category.number}
              href={category.href}
              className="group grid gap-4 border-b border-black/10 py-7 transition-colors hover:bg-black/[0.02] sm:grid-cols-[60px_1fr_auto] sm:items-center sm:gap-6"
            >
              <span className="font-mono text-xs text-zinc-400">
                {category.number}
              </span>

              <div>
                <h3 className="text-xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                  {category.title}
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600">
                  {category.description}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="text-lg text-zinc-400 transition-transform duration-300 group-hover:translate-x-1"
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
