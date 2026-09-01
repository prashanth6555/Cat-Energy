import { Link } from "react-router-dom";
import PawIcon from "./PawIcon";

export default function Logo({ dark = false }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight shrink-0"
      aria-label="Cat Energy — home"
    >
      <span
        className={`grid place-items-center w-9 h-9 rounded-full ${
          dark ? "bg-cream" : "bg-ink"
        }`}
      >
        <PawIcon className="w-5 h-5" color={dark ? "#1B1815" : "#F7F2E9"} />
      </span>
      <span className={dark ? "text-cream" : "text-ink"}>
        Cat<span className="text-tabby">Energy</span>
      </span>
    </Link>
  );
}
