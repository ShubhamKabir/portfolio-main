const creativeProjects = [
  {
    number: "01",
    title: "Gaming Headset",
    category: "Promotional Creative",
    description:
      "Cinematic gaming headset promotional artwork built around dramatic lighting, atmosphere, and product-focused composition.",
    type: "image",
    src: "/creative/01-gaming-headset.png",
    alt: "Gaming headset promotional artwork",
  },
  {
    number: "02",
    title: "NEXORA",
    category: "Logo & Brand Animation",
    description:
      "A short logo animation presenting NEXORA with a dark, clean, and futuristic visual direction.",
    type: "video",
    src: "/creative/02-nexora.mp4",
    alt: "NEXORA logo animation",
  },
  {
    number: "03",
    title: "Premium Gaming Thumbnail",
    category: "Thumbnail Design",
    description:
      "A polished gaming and product-style thumbnail focused on strong visual hierarchy and cinematic presentation.",
    type: "image",
    src: "/creative/03-premium-gaming-thumbnail.png",
    alt: "Premium gaming thumbnail artwork",
  },
  {
    number: "04",
    title: "Cinematic Key Art",
    category: "Key Art",
    description:
      "Cinematic poster-style artwork combining atmosphere, lighting, composition, and typography.",
    type: "image",
    src: "/creative/04-cinematic-key-art.png",
    alt: "Cinematic key art artwork",
  },
  {
    number: "05",
    title: "NEON HORIZON",
    category: "Cinematic Motion Poster",
    description:
      "A futuristic city-at-night motion poster prepared in Photoshop and animated in After Effects.",
    type: "video",
    src: "/creative/05-neon-horizon.mp4",
    alt: "NEON HORIZON cinematic motion poster",
  },
  {
    number: "06",
    title: "Gaming VFX Shot",
    category: "VFX & Motion",
    description:
      "A short cinematic VFX shot combining generated artwork with energy effects, glow, particles, and camera movement.",
    type: "video",
    src: "/creative/06-gaming-vfx-shot.mp4",
    alt: "Gaming VFX cinematic shot",
  },
];

export default function CreativeWorkPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Creative Work
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Visual work across design, motion, and digital media.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            A selection of visual and creative projects spanning promotional
            design, branding, cinematic artwork, motion graphics, and VFX.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          {creativeProjects.map((project) => (
            <article key={project.number} className="group">
              <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:border-black/20 group-hover:shadow-[0_16px_45px_rgba(0,0,0,0.08)]">
                <div className="aspect-video overflow-hidden bg-zinc-100">
                  {project.type === "image" ? (
                    <img
                      src={project.src}
                      alt={project.alt}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                    />
                  ) : (
                    <video
                      src={project.src}
                      controls
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
              </div>

              <div className="px-1 pt-5">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-medium text-zinc-400">
                    {project.number}
                  </span>

                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                    {project.category}
                  </p>
                </div>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  {project.title}
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="border-t border-black/10 pt-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
              More in progress
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              The collection will continue to grow.
            </h2>

            <p className="mt-4 leading-7 text-zinc-600">
              This collection represents the current selection of creative work,
              with new visual and motion projects added as they are developed
              and curated.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
