const longVideos = [
  {
    number: "01",
    title: "Top 20 FREE Games on Windows 11 Store (& Windows 10)",
    views: "491K+ views · 2 years ago",
    image: "/youtube/01-top-20-free-windows-games.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
  {
    number: "02",
    title: "Honkai Impact 3rd Gameplay PC Ultra Graphics 4K 60FPS",
    views: "186K+ views · 3 years ago",
    image: "/youtube/02-honkai-impact-3rd.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
  {
    number: "03",
    title:
      "Top 16 Free Cross Platform Games on PC and Mobile with Cross-Play (Cross Progression)",
    views: "54K+ views · 2 years ago",
    image: "/youtube/03-cross-platform-games.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
  {
    number: "04",
    title: "Top 10 Best FREE Battle Royale Games for PC to Play in 2026",
    views: "52K+ views · 7 months ago",
    image: "/youtube/04-battle-royale-games.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
  {
    number: "05",
    title: "Genshin Impact Gameplay PC Ultra Graphics 4K 60FPS",
    views: "15K+ views · 3 years ago",
    image: "/youtube/05-genshin-impact.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
  {
    number: "06",
    title: "TOP 5 ULTIMATE FREE Racing Games for PC You MUST Play in 2025 🔥",
    views: "12K+ views · 10 months ago",
    image: "/youtube/06-free-racing-games.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
  {
    number: "07",
    title:
      "Snowbreak: Containment Zone Gameplay Ultra Graphics PC 4K 60FPS 2025",
    views: "9.9K+ views · 1 year ago",
    image: "/youtube/07-snowbreak.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
  {
    number: "08",
    title: "Top 12 Best FREE ANIME Games for PC to Play in 2026",
    views: "9.8K+ views · 6 months ago",
    image: "/youtube/08-free-anime-games.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
  {
    number: "09",
    title: "Once Human Gameplay (Android, iOS) Ultra Graphics 2025",
    views: "5.7K+ views · 1 year ago",
    image: "/youtube/09-once-human.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
  {
    number: "10",
    title:
      "BoAt Rockerz 210 ANC Unboxing & Overview | Latest Budget Neckband Earphone",
    views: "5.1K+ views · 1 year ago",
    image: "/youtube/10-boat-rockerz-210.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
  {
    number: "11",
    title:
      "Top 16 Free Fighting Games for Mobile (Android/iOS) to Play in 2026",
    views: "3.9K+ views · 3 months ago",
    image: "/youtube/11-free-fighting-games-mobile.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
  {
    number: "12",
    title: "Top 13 Best FREE Open World Games for PC to Play in 2026",
    views: "3.4K+ views · 5 months ago",
    image: "/youtube/12-free-open-world-games.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
  {
    number: "13",
    title: "I Tested GeForce NOW India (Free Tier) – Is It Worth It?",
    views: "412+ views · 1 month ago",
    image: "/youtube/13-geforce-now-india.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
  {
    number: "14",
    title: "Top 8 Best FREE Stealth Games for PC to Play in 2026",
    views: "816+ views · 2 months ago",
    image: "/youtube/14-free-stealth-games.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
];

const shorts = [
  {
    number: "01",
    title: "Top 3 OFFLINE CRICKET Games for Mobile to ...",
    views: "1.7M+ views",
    image: "/youtube/01-offline-cricket.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
  {
    number: "02",
    title: "Top 3 CHESS Games for Android to play in 2025",
    views: "242K+ views",
    image: "/youtube/02-chess-games-android.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
  {
    number: "03",
    title: "FREE PC Shooter You CANNOT Miss! (Ubisoft...)",
    views: "1.6K+ views",
    image: "/youtube/03-free-pc-shooter.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
  {
    number: "04",
    title: "Top 3 Best Budget TWS Earbuds Under ₹1000...",
    views: "1.5K+ views",
    image: "/youtube/04-budget-tws.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
  {
    number: "05",
    title: "No High-End PC? No Problem Anymore! 🤯 ...",
    views: "1.4K+ views",
    image: "/youtube/05-no-high-end-pc.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
  {
    number: "06",
    title: "FREE PC Game Alert on Steam: Claim This Viral...",
    views: "1.3K+ views",
    image: "/youtube/06-steam-game-alert.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
  {
    number: "07",
    title: "Two FREE Games on Epic - Grab Them Befor...",
    views: "1.2K+ views",
    image: "/youtube/07-epic-game-alert.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
  {
    number: "08",
    title: "Top 3 Wireless Headphones Under ...",
    views: "1.2K+ views",
    image: "/youtube/08-wireless-headphones.png",
    href: "PASTE_YOUTUBE_LINK_HERE",
  },
];

export default function YouTubePage() {
  return (
    <main>
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20">
        <p className="mb-5 text-xs font-medium tracking-[0.22em] text-[#5b6b82]">
          YOUTUBE & CONTENT
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
          From research to published video.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5b6b82]">
          I create and publish content end-to-end — from research and topic
          strategy to recording, editing, thumbnails, optimization, publishing,
          and performance analysis.
        </p>
      </section>

      {/* Stats */}
      <section className="border-y border-black/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-10 sm:grid-cols-4">
          <div>
            <p className="text-2xl font-semibold">11.4K+</p>
            <p className="mt-1 text-sm text-[#5b6b82]">Subscribers</p>
          </div>

          <div>
            <p className="text-2xl font-semibold">558+</p>
            <p className="mt-1 text-sm text-[#5b6b82]">Videos published</p>
          </div>

          <div>
            <p className="text-2xl font-semibold">1.7M+</p>
            <p className="mt-1 text-sm text-[#5b6b82]">Views on one video</p>
          </div>

          <div>
            <p className="text-2xl font-semibold">2018</p>
            <p className="mt-1 text-sm text-[#5b6b82]">
              Creating on YouTube since
            </p>
          </div>
        </div>
      </section>

      {/* Long-form videos */}
      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="mb-10">
          <p className="text-xs font-medium tracking-[0.22em] text-[#5b6b82]">
            LONG-FORM
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Selected videos
          </h2>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-x-12 gap-y-16 md:grid-cols-2">
          {longVideos.map((video) => (
            <a
              key={video.number}
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full max-w-[590px]"
            >
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                <img
                  src={video.image}
                  alt={video.title}
                  className="block aspect-video w-full object-contain transition-transform duration-300 group-hover:scale-[1.015]"
                />
              </div>

              <div className="mt-5 grid grid-cols-[32px_1fr] gap-4">
                <span className="text-sm text-[#8a8a8a]">{video.number}</span>

                <div>
                  <h3 className="text-xl font-medium leading-7 tracking-tight transition-opacity group-hover:opacity-60">
                    {video.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#5b6b82]">{video.views}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Shorts */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <div className="mb-10">
            <p className="text-xs font-medium tracking-[0.22em] text-[#5b6b82]">
              SHORT-FORM
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Selected Shorts
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-7 gap-y-14 sm:grid-cols-4">
            {shorts.map((short) => (
              <a
                key={short.number}
                href={short.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mx-auto w-full max-w-[265px]"
              >
                <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                  <img
                    src={short.image}
                    alt={short.title}
                    className="block aspect-[2/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.015]"
                  />
                </div>

                <div className="mt-4">
                  <span className="text-sm text-[#8a8a8a]">{short.number}</span>

                  <h3 className="mt-2 text-base font-medium leading-6 tracking-tight transition-opacity group-hover:opacity-60">
                    {short.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#5b6b82]">{short.views}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-medium tracking-[0.22em] text-[#5b6b82]">
                END-TO-END WORKFLOW
              </p>

              <h2 className="mt-3 max-w-md text-3xl font-semibold tracking-tight">
                Every part of the process matters.
              </h2>
            </div>

            <div className="divide-y divide-black/10 border-y border-black/10">
              {[
                "Research & topic discovery",
                "Content strategy & planning",
                "Recording & production",
                "Video editing",
                "Thumbnail creation",
                "Titles, SEO & optimization",
                "Publishing & performance analysis",
              ].map((item, index) => (
                <div
                  key={item}
                  className="grid grid-cols-[40px_1fr] gap-5 py-5"
                >
                  <span className="text-sm text-[#8a8a8a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-base font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16">
        <div className="rounded-[28px] bg-black px-8 py-12 text-white sm:px-12 sm:py-14">
          <p className="text-xs font-medium tracking-[0.22em] text-white/50">
            YOUTUBE
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            See the complete channel.
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-white/60">
            Explore more gaming, technology, tutorial, review, gameplay, and
            short-form content on my YouTube channel.
          </p>

          <a
            href="https://www.youtube.com/@ArkRayDen"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-80"
          >
            Visit YouTube Channel →
          </a>
        </div>
      </section>
    </main>
  );
}
