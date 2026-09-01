import { motion } from "framer-motion";
import PawIcon from "./PawIcon";

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative bg-cream-100 border border-ink/10 rounded-blob p-6 flex flex-col transition-shadow duration-300 hover:shadow-crisp"
    >
      {product.tag && (
        <span className="absolute top-5 right-5 text-xs font-semibold bg-tabby text-ink px-3 py-1 rounded-full">
          {product.tag}
        </span>
      )}

      <div className="w-full aspect-[4/3] rounded-2xl bg-moss-100 mb-6 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute bottom-3 right-3 grid place-items-center w-9 h-9 rounded-full bg-cream/90 backdrop-blur-sm shadow-crisp-sm transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
          <PawIcon className="w-5 h-5" color="#4C5A3F" />
        </span>
      </div>

      <p className="text-xs uppercase tracking-wide text-moss-500 font-semibold mb-2">
        {product.category}
      </p>
      <h3 className="font-display text-2xl text-ink mb-2">{product.name}</h3>
      <p className="text-sm text-ink-400 leading-relaxed flex-1">
        {product.blurb}
      </p>

      <div className="flex items-center justify-between mt-6 pt-6 border-t border-ink/10">
        <div>
          <p className="text-lg font-semibold text-ink">{product.price}</p>
          <p className="text-xs text-ink-300">{product.protein}</p>
        </div>
        <button className="text-sm font-semibold text-ink border-b-2 border-transparent hover:border-tabby hover:text-tabby transition-colors">
          View recipe
        </button>
      </div>
    </motion.article>
  );
}
