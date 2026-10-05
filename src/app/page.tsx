const categories = [
  "All",
  "Movies",
  "Dramas",
  "Anime",
  "Manga",
  "Manhwa",
  "Webtoon",
  "Korean",
  "English",
  "Chinese",
];

const featuredItems = [
  {
    title: "The Last Horizon",
    type: "Movie",
    labels: ["Sci‑Fi", "Thriller", "Top Rated"],
    accent: "from-cyan-500 via-blue-500 to-indigo-700",
    year: "2024",
  },
  {
    title: "Moonlit Echoes",
    type: "Drama",
    labels: ["Mystery", "Romance", "New"],
    accent: "from-fuchsia-500 via-violet-500 to-purple-700",
    year: "2025",
  },
  {
    title: "Silent Blade",
    type: "Anime",
    labels: ["Action", "Fantasy", "Popular"],
    accent: "from-emerald-500 via-teal-500 to-cyan-700",
    year: "2024",
  },
];

const mediaItems = [
  { title: "Nocturne City", type: "Drama", labels: ["Neo-noir", "Crime", "Korean"], accent: "from-indigo-500 to-violet-600" },
  { title: "Starbound Academy", type: "Anime", labels: ["Adventure", "Sci‑Fi", "Action"], accent: "from-sky-500 to-cyan-600" },
  { title: "Paper Hearts", type: "Manhwa", labels: ["Romance", "Slice of Life", "New"], accent: "from-rose-500 to-pink-600" },
  { title: "The Glass Signal", type: "Movie", labels: ["Mystery", "Drama", "English"], accent: "from-amber-500 to-orange-600" },
  { title: "Iron Reign", type: "Manga", labels: ["Fantasy", "Action", "Japanese"], accent: "from-lime-500 to-emerald-600" },
  { title: "Night Bloom", type: "Webtoon", labels: ["Romance", "Fantasy", "Popular"], accent: "from-purple-500 to-fuchsia-600" },
];

const watchlist = [
  { title: "Recovery Lane", meta: "Drama • 8 episodes" },
  { title: "The Silent Archive", meta: "Movie • 2h 11m" },
  { title: "Veil of Ash", meta: "Anime • 12 episodes" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 text-lg font-black text-white shadow-lg shadow-violet-500/30">
              L
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-violet-300">Logbook</p>
              <p className="text-sm text-slate-400">Entertainment tracker</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#" className="transition hover:text-white">Home</a>
            <a href="#" className="transition hover:text-white">Browse</a>
            <a href="#" className="transition hover:text-white">Collections</a>
            <a href="#" className="transition hover:text-white">Discover</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-violet-400/60 hover:bg-violet-500/10">
              Search
            </button>
            <button className="rounded-full bg-violet-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400">
              Log in
            </button>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8 lg:py-10">
        <section className="mb-10 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 shadow-2xl shadow-slate-950/60">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-violet-300">
              Your library
            </p>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-white md:text-5xl">
              Track every show, movie, anime, and read in one place.
            </h1>
            <p className="mt-4 max-w-lg text-base text-slate-300 md:text-lg">
              Keep your watchlist, reading list, and favorites organized by category, language, and genre.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400">
                Start tracking
              </button>
              <button className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-400/40 hover:bg-violet-500/10">
                Explore library
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Top Picks</h2>
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-300">
                Updated today
              </span>
            </div>

            <div className="space-y-4">
              {featuredItems.map((item) => (
                <div key={item.title} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-3">
                  <div className={`h-20 w-16 rounded-xl bg-gradient-to-br ${item.accent}`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-white">{item.title}</p>
                      <span className="text-xs text-slate-400">{item.year}</span>
                    </div>
                    <p className="mt-1 text-sm text-violet-300">{item.type}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.labels.map((label) => (
                        <span key={label} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-white">Browse by category</h2>
            <button className="text-sm text-violet-300 transition hover:text-violet-200">View all</button>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  index === 0
                    ? "border-violet-400 bg-violet-500/20 text-violet-100"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-violet-400/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.8fr_0.8fr]">
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Top Shows & Reads</h2>
              <span className="text-sm text-slate-400">120 titles saved</span>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {mediaItems.map((item) => (
                <article key={item.title} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80 shadow-lg shadow-slate-950/50 transition hover:-translate-y-1 hover:border-violet-400/50">
                  <div className={`h-44 w-full bg-gradient-to-br ${item.accent}`} />
                  <div className="p-4">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-300">
                        {item.type}
                      </span>
                      <span className="text-xs text-slate-400">4.8 ★</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.labels.map((label) => (
                        <span key={label} className="rounded-full bg-slate-800 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5">
              <h3 className="mb-4 text-xl font-bold text-white">Quick stats</h3>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-sm text-slate-400">Shows tracked</p>
                  <p className="mt-2 text-3xl font-black text-white">84</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-sm text-slate-400">Books & manga</p>
                  <p className="mt-2 text-3xl font-black text-white">62</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-sm text-slate-400">Current streak</p>
                  <p className="mt-2 text-3xl font-black text-white">14 days</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-violet-500/15 via-slate-900 to-slate-900 p-5">
              <h3 className="mb-4 text-xl font-bold text-white">Watchlist</h3>
              <div className="space-y-3">
                {watchlist.map((entry) => (
                  <div key={entry.title} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-3">
                    <div>
                      <p className="font-medium text-white">{entry.title}</p>
                      <p className="text-sm text-slate-400">{entry.meta}</p>
                    </div>
                    <button className="rounded-full border border-violet-400/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                      Track
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
