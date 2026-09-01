import SectionHeading from "../SectionHeading";
import TestimonialCard from "../TestimonialCard";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-24 bg-cream">
      <div className="container">
        <SectionHeading
          eyebrow="Owners & cats"
          title="Trusted by cats who don't trust much."
          align="center"
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
