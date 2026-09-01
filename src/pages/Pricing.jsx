import { useState } from "react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import PricingCard from "../components/PricingCard";
import Reveal from "../components/Reveal";
import { plans } from "../data/pricing";

const faqs = [
  {
    q: "Can I change my cat's recipe later?",
    a: "Yes — swap recipes, adjust portions, or pause delivery any time from your account, no fees either way.",
  },
  {
    q: "What if my cat has allergies?",
    a: "Our onboarding quiz flags common allergens up front, and our Rabbit Field recipe covers most sensitive stomachs.",
  },
  {
    q: "Is shipping really free?",
    a: "Routine and Multi-Cat plans ship free everywhere we deliver. Taster boxes ship free over $35.",
  },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="One plan, sized to one cat."
        description="No tiers based on features you don't need — just portioning that matches your cat's actual weight and appetite."
      />

      <section className="py-24 bg-cream">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 items-stretch md:items-start">
            {plans.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} index={i} />
            ))}
          </div>

          <p className="text-center text-sm text-ink-300 mt-10">
            All plans include a 30-day fit guarantee. Not right for your cat? Full refund, no questions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-moss-100">
        <div className="container grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <SectionHeading
            eyebrow="Questions"
            title="Before you switch bowls."
          />
          <div>
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal key={f.q} delay={i * 0.06} className="border-b border-ink/10">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="font-display text-lg text-ink">
                      {f.q}
                    </span>
                    <span
                      className={`shrink-0 w-8 h-8 grid place-items-center rounded-full border border-ink/20 transition-transform duration-300 ${
                        isOpen ? "rotate-45 bg-tabby border-tabby" : ""
                      }`}
                    >
                      <svg viewBox="0 0 12 12" className="w-3 h-3 fill-ink">
                        <path d="M5 0h2v12H5zM0 5h12v2H0z" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                    }`}
                    style={{ display: "grid" }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-ink-400 leading-relaxed pr-12">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
