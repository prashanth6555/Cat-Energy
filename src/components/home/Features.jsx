import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import PawIcon from "../PawIcon";

const features = [
  {
    title: "Real meat, first",
    body: "Chicken, salmon, duck and rabbit lead every ingredient list — never a meal or by-product as the base.",
  },
  {
    title: "Portioned by your cat",
    body: "Weight, age, and activity set the exact daily amount, recalculated every time your cat's plan changes.",
  },
  {
    title: "No fillers, no fuss",
    body: "No corn, wheat, or soy — just what a carnivore's digestive system is actually built to process.",
  },
  {
    title: "Delivered on schedule",
    body: "Set it once and food arrives before the last bowl runs out, wherever you are.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-cream">
      <div className="container">
        <SectionHeading
          eyebrow="How it works"
          title="Four decisions, made for you."
          description="Everything about Cat Energy starts from one question: what would a cat choose to eat, if it could read a label?"
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="h-full p-7 rounded-blob-alt bg-cream-100 border border-ink/10 transition-all duration-300 hover:border-tabby hover:-translate-y-1">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-moss-100">
                  <PawIcon className="w-5 h-5" color="#4C5A3F" />
                </span>
                <h3 className="font-display text-xl text-ink mt-4 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-ink-400 leading-relaxed">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
