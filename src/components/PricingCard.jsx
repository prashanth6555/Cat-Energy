import { motion } from "framer-motion";
import Button from "./Button";

export default function PricingCard({ plan, index = 0 }) {
  const { highlighted } = plan;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`relative flex flex-col rounded-blob-alt p-8 border transition-shadow duration-300 ${
        highlighted
          ? "bg-ink text-cream border-ink shadow-crisp"
          : "bg-cream-100 text-ink border-ink/10 hover:shadow-crisp-sm"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-8 bg-tabby text-ink text-xs font-semibold px-3 py-1 rounded-full">
          Most popular
        </span>
      )}

      <h3 className="font-display text-2xl mb-1">{plan.name}</h3>
      <p
        className={`text-sm mb-6 ${
          highlighted ? "text-ink-100" : "text-ink-400"
        }`}
      >
        {plan.description}
      </p>

      <div className="flex items-baseline gap-1 mb-6">
        <span className="font-display text-5xl">${plan.price}</span>
        <span className={highlighted ? "text-ink-200" : "text-ink-300"}>
          {plan.period}
        </span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <span
              className={`mt-0.5 w-4 h-4 rounded-full grid place-items-center shrink-0 ${
                highlighted ? "bg-tabby text-ink" : "bg-moss-100 text-moss-600"
              }`}
            >
              <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 fill-current">
                <path d="M4.5 8.5 1.8 5.8l-1 1L4.5 10.5l7-7-1-1z" />
              </svg>
            </span>
            <span className={highlighted ? "text-ink-100" : "text-ink-400"}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      <Button
        to="/contact"
        variant={highlighted ? "primary" : "outline"}
        className={`w-full ${
          highlighted
            ? "!bg-tabby !text-ink hover:!bg-cream"
            : ""
        }`}
      >
        {plan.cta}
      </Button>
    </motion.div>
  );
}
