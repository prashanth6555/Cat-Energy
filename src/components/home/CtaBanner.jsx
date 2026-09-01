import Reveal from "../Reveal";
import Button from "../Button";
import PawIcon from "../PawIcon";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-cream">
      <div className="container">
        <Reveal>
          <div className="relative bg-moss rounded-blob px-8 py-16 md:py-20 text-center overflow-hidden">
            <PawIcon
              className="absolute -left-10 -top-10 w-48 h-48 opacity-10 -rotate-12"
              color="#F7F2E9"
            />
            <PawIcon
              className="absolute -right-10 -bottom-10 w-48 h-48 opacity-10 rotate-12"
              color="#F7F2E9"
            />
            <h2 className="font-display text-display-md font-medium text-cream max-w-xl mx-auto relative">
              Your cat's next bowl could be doing more for them.
            </h2>
            <p className="mt-4 text-moss-100 max-w-md mx-auto relative">
              Answer four questions about your cat and get a plan built
              around them — first box ships in under a week.
            </p>
            <div className="mt-8 relative">
              <Button to="/pricing" variant="primary" className="!bg-tabby !text-ink hover:!bg-cream">
                Start the plan quiz
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
