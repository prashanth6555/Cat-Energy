import { motion } from "framer-motion";
import PawIcon from "./PawIcon";

/**
 * Compact hero banner used on inner pages (About, Products, Pricing, Blog, Contact).
 */
export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative bg-ink text-cream overflow-hidden">
      <div className="absolute -right-16 -top-16 opacity-10 rotate-12">
        <PawIcon className="w-72 h-72" color="#F7F2E9" />
      </div>
      <div className="container relative py-24 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-tabby-200 text-sm font-medium mb-4"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-display-lg font-medium max-w-2xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-ink-100 max-w-lg leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
