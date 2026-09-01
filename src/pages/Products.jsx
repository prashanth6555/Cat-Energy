import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/PageHero";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";

export default function Products() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? products
        : products.filter((p) => p.category === active),
    [active]
  );

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Recipes built around real prey ratios."
        description="Every bag and pouch is formulated to mirror what a cat would eat in the wild — high protein, moderate fat, minimal carbohydrate."
      />

      <section className="py-20 bg-cream">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                  active === c
                    ? "bg-ink text-cream border-ink"
                    : "bg-transparent text-ink border-ink/20 hover:border-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="mt-16 text-center text-ink-400">
              No recipes in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
