import Reveal from "../Reveal";
import PawIcon from "../PawIcon";

const benefits = [
  "Shinier coats within the first 4 weeks",
  "Steadier energy — fewer 3am zoomies, more play",
  "Smaller, less odorous litter box output",
  "Healthier weight without portion guesswork",
];

export default function Benefits() {
  return (
    <section className="py-24 bg-ink text-cream overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="aspect-square rounded-blob-alt bg-tabby/90 grid place-items-center relative">
            <PawIcon className="w-40 h-40 animate-floaty" color="#1B1815" />
            <div className="absolute -bottom-6 -left-6 bg-cream text-ink rounded-blob px-6 py-4 shadow-crisp">
              <p className="font-display text-3xl">28<span className="text-base">lbs</span></p>
              <p className="text-xs text-ink-400">healthy weight, held</p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-tabby-200 font-semibold text-sm mb-4">
              What owners notice
            </p>
            <h2 className="font-display text-display-md font-medium">
              The change shows up before the checkup does.
            </h2>
            <p className="mt-5 text-ink-100 leading-relaxed max-w-md">
              Most owners aren't nutritionists — they just know when
              something's working. Here's what they tell us first.
            </p>
          </Reveal>

          <ul className="mt-9 space-y-4">
            {benefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.08} as="li">
                <div className="flex items-center gap-4">
                  <span className="grid place-items-center w-8 h-8 rounded-full bg-tabby shrink-0">
                    <svg viewBox="0 0 12 12" className="w-3 h-3 fill-ink">
                      <path d="M4.5 8.5 1.8 5.8l-1 1L4.5 10.5l7-7-1-1z" />
                    </svg>
                  </span>
                  <span className="text-ink-100">{b}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
