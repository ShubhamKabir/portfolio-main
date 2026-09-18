import Image from "next/image";

const services = [
  {
    number: "01",
    category: "Video Editing",
    title: "Trim, Resize & Convert",
    description:
      "Video editing work covering trimming, cutting, merging, resizing, and format conversion for different platforms and requirements.",
    image: "/fiverr/video-editing.png",
  },
  {
    number: "02",
    category: "Programming & Tech",
    title: "Content Transfer",
    description:
      "Content transfer and repurposing workflows for YouTube and social media platforms.",
    image: "/fiverr/programming-tech.png",
  },
  {
    number: "03",
    category: "Research & Data",
    title: "Web Research & Data Collection",
    description:
      "Web research, data collection, and data-entry work organized around clear requirements and structured information.",
    image: "/fiverr/web-research.png",
  },
  {
    number: "04",
    category: "YouTube & Marketing",
    title: "Gaming Video SEO",
    description:
      "Optimization of gaming YouTube videos through titles, tags, positioning, and content-focused SEO.",
    image: "/fiverr/video-marketing.png",
  },
];

const testimonials = [
  {
    quote:
      "He was very cooperative, his work is elaborate and expert in his work…",
    category: "Video Editing",
  },
  {
    quote:
      "Rapid delivery without any flaws! It's a pleasure to work with Shubham!",
    category: "Video Editing",
  },
  {
    quote: "Great work! And just a wonderful person to communicate with.",
    category: "Video Editing",
  },
  {
    quote:
      "The project was immense in the end, but he worked on it diligently and stayed in close communication the entire time.",
    category: "Programming & Tech",
  },
  {
    quote:
      "He did everything I asked and more. I am very pleased with the outcome.",
    category: "Video Editing",
  },
];

export default function FreelancePage() {
  return (
    <main>
      {/* Intro */}
      <section className="px-6 pb-20 pt-24 md:pb-28 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm tracking-[0.2em] text-zinc-500">
            FIVERR & FREELANCE
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Practical digital work, delivered for real clients.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
            Freelance work across video, content, research, technical tasks, and
            digital services through Fiverr and independent clients.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-black/10 pt-8 md:grid-cols-4">
            <div>
              <p className="text-3xl font-semibold tracking-tight">100+</p>
              <p className="mt-2 text-sm text-zinc-500">Freelance projects</p>
            </div>

            <div>
              <p className="text-3xl font-semibold tracking-tight">70+</p>
              <p className="mt-2 text-sm text-zinc-500">Clients worked with</p>
            </div>

            <div>
              <p className="text-3xl font-semibold tracking-tight">80+</p>
              <p className="mt-2 text-sm text-zinc-500">Fiverr projects</p>
            </div>

            <div>
              <p className="text-3xl font-semibold tracking-tight">5★</p>
              <p className="mt-2 text-sm text-zinc-500">Fiverr rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected services */}
      <section className="border-t border-black/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.2em] text-zinc-500">
              SELECTED SERVICES
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              A selection of what I offer.
            </h2>

            <p className="mt-6 text-base leading-7 text-zinc-600">
              These represent some of the main services currently available
              through my Fiverr work. For the complete range, visit my Fiverr
              profile.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="overflow-hidden rounded-2xl border border-black/10 bg-white"
              >
                <div className="relative aspect-video overflow-hidden border-b border-black/10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-7 md:p-8">
                  <p className="text-sm text-zinc-400">{service.number}</p>

                  <p className="mt-5 text-sm text-zinc-500">
                    {service.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-600">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Client feedback */}
      <section className="border-t border-black/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm tracking-[0.2em] text-zinc-500">
                CLIENT FEEDBACK
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                The work speaks through the people I worked with.
              </h2>

              <p className="mt-6 max-w-md leading-7 text-zinc-600">
                A selection of feedback from Fiverr clients across different
                projects and services.
              </p>
            </div>

            <div className="divide-y divide-black/10 border-t border-black/10">
              {testimonials.map((testimonial, index) => (
                <blockquote key={index} className="py-8">
                  <p className="text-xl leading-8 tracking-tight md:text-2xl">
                    “{testimonial.quote}”
                  </p>

                  <footer className="mt-5 text-sm text-zinc-500">
                    Fiverr client · {testimonial.category}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fiverr CTA */}
      <section className="border-t border-black/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-black px-8 py-12 text-white md:px-14 md:py-16">
            <p className="text-sm tracking-[0.2em] text-white/50">
              MORE SERVICES
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
              Looking for something else?
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-white/70">
              These are only selected services. Explore my Fiverr profile for my
              complete range of current offerings.
            </p>

            <a
              href="https://www.fiverr.com/s/3AGD69B"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-80"
            >
              View Fiverr Profile →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
