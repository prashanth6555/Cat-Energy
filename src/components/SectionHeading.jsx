import Reveal from "./Reveal";


export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p
          className={`text-sm font-medium mb-3 ${
            light ? "text-tabby-200" : "text-tabby-500"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-display-md font-medium ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-ink-100" : "text-ink-400"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
