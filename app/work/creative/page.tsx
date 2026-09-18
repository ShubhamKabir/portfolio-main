export default function CreativeWorkPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Creative Work
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Creative work across digital media and visual projects.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            A space for creative projects, visual work, and digital experiments
            that sit outside the technical and content-focused parts of my
            portfolio.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="border-t border-black/10 pt-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              Collection in Progress
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              More creative work will be added here.
            </h2>

            <p className="mt-4 leading-7 text-zinc-600">
              This section will grow as I curate and build out the visual and
              creative work that best represents this side of my work.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
