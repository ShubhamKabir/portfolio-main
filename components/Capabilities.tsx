export default function Capabilities() {
  const capabilities = [
    {
      number: "01",
      title: "Web Development",
      description:
        "HTML, CSS, JavaScript, React, and Next.js for modern, responsive websites.",
    },
    {
      number: "02",
      title: "Python & Data",
      description:
        "Python, SQL, Pandas, data analysis, and practical data workflows.",
    },
    {
      number: "03",
      title: "AI & Automation",
      description:
        "Prompt engineering, AI-assisted workflows, and practical automation solutions.",
    },
    {
      number: "04",
      title: "Creative & Content",
      description:
        "Gaming content, digital media, creative projects, and audience-focused work.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Capabilities
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            A broad toolkit for practical digital work.
          </h2>
        </div>

        <div className="border-t border-black/10">
          {capabilities.map((capability) => (
            <div
              key={capability.number}
              className="group grid gap-4 border-b border-black/10 py-7 transition-colors hover:bg-black/[0.02] sm:grid-cols-[60px_1fr] sm:gap-6"
            >
              <span className="font-mono text-xs text-zinc-400">
                {capability.number}
              </span>

              <div>
                <h3 className="text-xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                  {capability.title}
                </h3>

                <p className="mt-2 max-w-xl leading-7 text-zinc-600">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
