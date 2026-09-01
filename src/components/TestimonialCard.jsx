import { motion } from "framer-motion";

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-cream-100 border border-ink/10 rounded-blob p-8 flex flex-col h-full"
    >
      <span className="font-display text-5xl text-tabby leading-none mb-4">
        "
      </span>
      <blockquote className="text-ink text-lg leading-relaxed font-display flex-1">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-6 pt-6 border-t border-ink/10">
        <p className="font-semibold text-ink text-sm">{testimonial.name}</p>
        <p className="text-xs text-ink-300">{testimonial.cat}</p>
      </figcaption>
    </motion.figure>
  );
}
