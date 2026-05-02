import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = [
  {
    icon: <FaLinkedin aria-hidden="true" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mouniesh-vijayakumar-2447a2256/",
  },
  {
    icon: <FaGithub aria-hidden="true" />,
    label: "GitHub",
    href: "https://github.com/Mounieshh",
  },
  {
    icon: <FaTwitter aria-hidden="true" />,
    label: "Twitter / X",
    href: "https://x.com/Mounieshv",
  },
];

export default function FooterSection() {
  return (
    <footer
      role="contentinfo"
      className="bg-[var(--bg-invert)] text-[var(--bg)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Brand */}
        <div className="flex flex-col gap-2">
          <span className="font-black text-xl tracking-tight">MK</span>
          <p className="text-sm text-[var(--bg)]/50">
            &copy; {new Date().getFullYear()} Mouniesh Vijayakumar
          </p>
        </div>

        {/* Nav */}
        <nav aria-label="Footer navigation" className="flex gap-6">
          {NAV.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-semibold text-[var(--bg)]/60 hover:text-[var(--bg)] transition-colors duration-150"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Social */}
        <div className="flex gap-3" aria-label="Social links">
          {SOCIAL.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-md border border-[var(--bg)]/20 text-[var(--bg)]/60 hover:text-[var(--bg)] hover:border-[var(--bg)]/40 transition-colors duration-150"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
