import { motion } from "framer-motion";
import Button from "../Button";
import PawIcon from "../PawIcon";

const pawTrail = [
  { top: "14%", left: "58%", size: 34, rotate: -18, delay: 0.9 },
  { top: "30%", left: "72%", size: 26, rotate: 12, delay: 1.1 },
  { top: "48%", left: "62%", size: 30, rotate: -6, delay: 1.3 },
  { top: "64%", left: "76%", size: 22, rotate: 20, delay: 1.5 },
  { top: "78%", left: "58%", size: 28, rotate: -14, delay: 1.7 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="absolute inset-0 paw-texture opacity-[0.04] pointer-events-none" />

      <div className="container relative py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-tabby-500 font-semibold text-sm mb-5"
          >
            Species-appropriate nutrition
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-display-xl font-medium text-ink"
          >
            Food that keeps up
            <br />
            with your cat.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-ink-400 text-lg leading-relaxed max-w-md"
          >
            High-protein, low-filler recipes built around how cats actually
            eat in the wild — delivered on a schedule that fits your home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button to="/pricing" variant="primary">
              Build my cat's plan
            </Button>
            <Button to="/about" variant="outline">
              Why it's different
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex items-center gap-8"
          >
            <div>
              <p className="font-display text-3xl text-ink">40k+</p>
              <p className="text-xs text-ink-300 mt-1">Cats fed monthly</p>
            </div>
            <div className="w-px h-10 bg-ink/10" />
            <div>
              <p className="font-display text-3xl text-ink">96%</p>
              <p className="text-xs text-ink-300 mt-1">Reorder rate</p>
            </div>
            <div className="w-px h-10 bg-ink/10" />
            <div>
              <p className="font-display text-3xl text-ink">4.9<span className="text-lg">/5</span></p>
              <p className="text-xs text-ink-300 mt-1">Vet-rated recipes</p>
            </div>
          </motion.div>
        </div>

        {/* Signature moment: a paw-print trail bounds toward the bowl on load */}
        <div className="relative h-[420px] md:h-[480px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-8 rounded-blob bg-moss border-4 border-ink overflow-hidden"
          >
            <motion.img
              src="https://cataas.com/cat/cute?width=800&height=800"
              alt="A healthy, well-fed cat"
              className="w-full h-full object-cover"
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 paw-texture opacity-10 pointer-events-none" />
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 right-6 grid place-items-center w-16 h-16 rounded-full bg-cream/90 backdrop-blur-sm shadow-crisp-sm"
            >
              <PawIcon className="w-8 h-8" color="#4C5A3F" />
            </motion.div>
          </motion.div>

          {pawTrail.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: p.delay, ease: "backOut" }}
              style={{
                position: "absolute",
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                rotate: p.rotate,
              }}
            >
              <PawIcon className="w-full h-full" color="#E1631F" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
