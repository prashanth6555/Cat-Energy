import { Link } from "react-router-dom";
import Logo from "./Logo";

const quickLinks = [
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.25.07 1.62.07 4.81 0 3.2 0 3.56-.07 4.81-.15 3.23-1.66 4.77-4.92 4.92-1.25.06-1.62.07-4.85.07-3.2 0-3.56 0-4.81-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.25-.07-1.61-.07-4.81 0-3.19 0-3.56.07-4.81.15-3.23 1.67-4.77 4.92-4.92C8.44 2.2 8.8 2.2 12 2.2Zm0 3.65a6.15 6.15 0 1 0 0 12.3 6.15 6.15 0 0 0 0-12.3Zm0 10.15a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z",
  },
  {
    label: "X",
    href: "https://x.com",
    path: "M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.5 22H1.4l8.2-9.4L1 2h7.2l5 6.6L18.9 2Zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20Z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: "M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1Z",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    path: "M22.5 7.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C16.3 3.6 12 3.6 12 3.6h0s-4.3 0-7.3.3c-.4 0-1.4.1-2.3 1-.7.7-.9 2.3-.9 2.3S1.2 9 1.2 10.9v1.9c0 1.9.3 3.7.3 3.7s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 7.1.3 7.1.3s4.3 0 7.3-.3c.4 0 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.3-1.8.3-3.7v-1.9c0-1.9-.3-3.7-.3-3.7ZM9.8 14.7V8.9l5.5 2.9-5.5 2.9Z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container py-16 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Logo dark />
          <p className="mt-4 text-ink-200 text-sm leading-relaxed max-w-xs">
            Species-appropriate food, made from real meat, delivered on a
            schedule your cat actually needs.
          </p>
          <div className="flex gap-3 mt-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-10 h-10 grid place-items-center rounded-full border border-cream/25 hover:bg-tabby hover:border-tabby transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-cream">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Quick links</h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-ink-200 hover:text-tabby transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-ink-200">
            <li>Careers</li>
            <li>Press</li>
            <li>Sustainability</li>
            <li>Wholesale</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Stay in the loop</h4>
          <p className="text-sm text-ink-200 mb-4">
            One email a month. Feeding tips, new recipes, no spam.
          </p>
          <form
            className="flex items-center border border-cream/25 rounded-full pl-4 pr-1 py-1 focus-within:border-tabby transition-colors"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="bg-transparent text-sm placeholder:text-ink-300 flex-1 py-2 outline-none"
            />
            <button
              type="submit"
              className="bg-tabby text-ink text-xs font-semibold rounded-full px-4 py-2 hover:bg-cream transition-colors"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-300">
          <p>© {new Date().getFullYear()} Cat Energy. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-cream transition-colors cursor-pointer">
              Privacy
            </span>
            <span className="hover:text-cream transition-colors cursor-pointer">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
