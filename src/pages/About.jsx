import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import PawIcon from "../components/PawIcon";
import Button from "../components/Button";

const timeline = [
  { year: "2021", text: "Started in a rented commercial kitchen, hand-mixing recipes for 40 local cats." },
  { year: "2022", text: "Partnered with a feline nutritionist to formulate our first four core recipes." },
  { year: "2023", text: "Opened our own small-batch kitchen and stopped outsourcing production." },
  { year: "2025", text: "Reached 40,000 cats fed monthly across the country." },
];

const values = [
  { title: "Cat-first formulation", body: "Every recipe is built to a cat's biology, not a shelf-stability target or a price point." },
  { title: "Radical transparency", body: "Full ingredient sourcing and lab results are public for every batch we make." },
  { title: "Small-batch, always", body: "We cap batch sizes so freshness never depends on scale." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="We started because our own cat wouldn't eat."
        description="Cat Energy began as one bad bag of food and a stubborn tabby named Ziggy. Five years later, we still formulate every recipe like his opinion is the only one that matters."
      />

      <section className="py-24 bg-cream">
        <div className="container grid lg:grid-cols-2 gap-16 items-start">
          <SectionHeading
            eyebrow="Where it began"
            title="A kitchen experiment that outgrew the kitchen."
            description="Our founder spent four months testing recipes on her own cat before anyone else touched them. What started as a way to fix one picky eater turned into a formulation process we still use for every recipe today."
          />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08}>
                <div className="flex gap-6 pb-8 border-b border-ink/10 last:border-0">
                  <span className="font-display text-2xl text-tabby w-16 shrink-0">
                    {t.year}
                  </span>
                  <p className="text-ink-400 leading-relaxed">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://cataas.com/cat/cute?width=500&height=500",
              "https://cataas.com/cat/orange?width=500&height=500",
              "https://cataas.com/cat/tabby?width=500&height=500",
              "https://cataas.com/cat/grey?width=500&height=500",
            ].map((src, i) => (
              <Reveal key={src} delay={i * 0.08}>
                <div
                  className={`aspect-square rounded-blob overflow-hidden border-4 border-ink ${
                    i % 2 === 1 ? "translate-y-4" : ""
                  }`}
                >
                  <img
                    src={src}
                    alt="A cat fed on Cat Energy recipes"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-moss-100">
        <div className="container">
          <SectionHeading
            eyebrow="What we won't compromise"
            title="Three rules that shape every bag."
            align="center"
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full bg-cream rounded-blob p-8 border border-ink/10">
                  <PawIcon className="w-8 h-8 mb-5" color="#E1631F" />
                  <h3 className="font-display text-xl text-ink mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-ink-400 leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="container">
          <Reveal className="bg-ink rounded-blob px-8 py-16 text-center">
            <h2 className="font-display text-display-md font-medium text-cream max-w-xl mx-auto">
              Meet the team formulating your cat's next meal.
            </h2>
            <p className="mt-4 text-ink-100 max-w-md mx-auto">
              Nutritionists, a vet, and one very opinionated office cat.
            </p>
            <div className="mt-8">
              <Button to="/contact" variant="primary" className="!bg-tabby !text-ink hover:!bg-cream">
                Get in touch
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
