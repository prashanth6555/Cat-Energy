import PawIcon from "../components/PawIcon";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] grid place-items-center bg-cream text-center px-6">
      <div>
        <PawIcon className="w-16 h-16 mx-auto mb-6 opacity-40" color="#1B1815" />
        <h1 className="font-display text-display-md text-ink mb-3">
          This page wandered off.
        </h1>
        <p className="text-ink-400 mb-8 max-w-sm mx-auto">
          Even the best-trained cats stray sometimes. Let's get you back on the path.
        </p>
        <Button to="/" variant="primary">
          Back to home
        </Button>
      </div>
    </section>
  );
}
