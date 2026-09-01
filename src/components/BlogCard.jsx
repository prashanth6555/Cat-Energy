import { motion } from "framer-motion";

export default function BlogCard({ post, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group cursor-pointer"
    >
      <div className="aspect-[16/10] rounded-blob bg-moss-100 mb-5 overflow-hidden relative">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 bg-cream text-ink text-xs font-semibold px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>
      <div className="flex items-center gap-3 text-xs text-ink-300 mb-2">
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readTime} read</span>
      </div>
      <h3 className="font-display text-xl text-ink leading-snug group-hover:text-tabby transition-colors">
        {post.title}
      </h3>
      <p className="mt-2 text-sm text-ink-400 leading-relaxed">
        {post.excerpt}
      </p>
      <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-ink border-b-2 border-transparent group-hover:border-tabby group-hover:text-tabby transition-colors">
        Read the story
      </span>
    </motion.article>
  );
}
