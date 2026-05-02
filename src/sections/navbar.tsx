"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { SiHackerrank, SiLeetcode } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    icon: <SiLeetcode aria-hidden="true" />,
    label: "LeetCode profile",
    href: "https://leetcode.com/u/Mounieshh/",
  },
  {
    icon: <SiHackerrank aria-hidden="true" />,
    label: "HackerRank profile",
    href: "https://www.hackerrank.com/profile/iammounieshv",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        role="banner"
        className={[
          "sticky top-0 z-50 flex items-center justify-between px-6 py-4 transition-shadow duration-200",
          scrolled
            ? "bg-[var(--bg)]/95 backdrop-blur-sm shadow-[0_1px_0_0_var(--border-soft)]"
            : "bg-[var(--bg)] border-b border-[var(--border-soft)]",
        ].join(" ")}
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="text-[var(--ink)] font-black text-lg tracking-tight leading-none"
          aria-label="Mouniesh — home"
        >
          MK
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden md:flex gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-semibold text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop social icons */}
        <div className="hidden md:flex gap-2" aria-label="Social links">
          {SOCIAL_LINKS.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-md border border-[var(--border-soft)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:border-[var(--border)] transition-colors duration-150"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-md border border-[var(--border-soft)] text-[var(--ink)]"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <CloseIcon className="w-5 h-5" aria-hidden="true" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <MenuIcon className="w-5 h-5" aria-hidden="true" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-[var(--ink)]/30 z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              id="mobile-menu"
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.32, 0, 0.67, 0] }}
              className="fixed top-0 right-0 h-full w-72 bg-[var(--bg)] border-l border-[var(--border-soft)] z-50 md:hidden flex flex-col p-8 gap-8"
              aria-label="Mobile navigation"
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-9 h-9 flex items-center justify-center rounded-md border border-[var(--border-soft)] text-[var(--ink)]"
                >
                  <CloseIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {NAV_LINKS.map(({ label, href }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.24 }}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-bold text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
                  >
                    {label}
                  </motion.a>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                {SOCIAL_LINKS.map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-md border border-[var(--border-soft)] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
