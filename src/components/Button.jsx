import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-body font-semibold text-sm tracking-wide rounded-full px-6 py-3 transition-all duration-300 ease-out active:scale-95";

  const variants = {
    primary:
      "bg-ink text-cream hover:bg-tabby hover:text-ink shadow-crisp-sm hover:shadow-none hover:-translate-y-0.5",
    outline:
      "border-2 border-ink text-ink bg-transparent hover:bg-ink hover:text-cream hover:-translate-y-0.5",
    ghost: "text-ink hover:text-tabby",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
