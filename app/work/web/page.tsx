export default function WebProjectsPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Web Projects
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Websites, applications, and digital systems.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            This section will showcase websites, web applications, automation
            systems, and other digital experiences as they are built.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="border-t border-black/10 pt-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              In Progress
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Building this collection over time.
            </h2>

            <p className="mt-4 leading-7 text-zinc-600">
              New web projects will be added here as I build and complete
              websites, applications, and automation-driven digital systems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
