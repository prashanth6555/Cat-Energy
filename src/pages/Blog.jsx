import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import BlogCard from "../components/BlogCard";
import { posts, blogCategories } from "../data/blogPosts";

export default function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Notes on feeding cats well."
        description="Nutrition explainers, feeding guides, and the occasional story from cats who've been on the plan for years."
      />

      <section className="py-16 bg-cream border-b border-ink/10">
        <div className="container flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <svg
              viewBox="0 0 24 24"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 fill-none stroke-ink-300 stroke-2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-11 pr-4 py-3 rounded-full border border-ink/15 bg-cream-100 text-sm outline-none focus:border-tabby transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {blogCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                  category === c
                    ? "bg-ink text-cream border-ink"
                    : "bg-transparent text-ink border-ink/20 hover:border-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container">
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filtered.map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="font-display text-2xl text-ink mb-2">
                No articles match "{query}"
              </p>
              <p className="text-ink-400">
                Try a different search term or category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
