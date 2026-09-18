export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 pb-12 pt-6 md:pb-16 md:pt-8"
    >
      <div className="rounded-3xl bg-black px-6 py-10 text-white sm:px-10 md:px-12 md:py-12">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s build something useful.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
            Whether you&apos;re interested in working together, discussing a
            project, or simply want to connect, feel free to reach out.
          </p>

          <a
            href="mailto:shubhamakabir@gmail.com"
            className="mt-7 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/90"
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  );
}
