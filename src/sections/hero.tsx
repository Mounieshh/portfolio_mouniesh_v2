"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: EASE, delay },
});

export default function HeroSection() {
  return (
    <section
      aria-label="Introduction"
      className="min-h-[calc(100svh-57px)] bg-[var(--bg)] border-b border-[var(--border-soft)] flex flex-col"
    >
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 lg:px-20 py-16 md:py-24 items-center max-w-7xl mx-auto w-full">

        {/* Left — text */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-1.5 border border-[var(--border-soft)] rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--ink-muted)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              Available for work
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-[var(--ink)]"
          >
            I&apos;m Mouniesh,
            <br />
            <span className="text-[var(--accent)]">Software</span>
            <br />
            Engineer.
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="text-[var(--ink-muted)] text-base sm:text-lg leading-relaxed max-w-md"
          >
            I build clean, fast web applications — from polished frontends to
            production-ready APIs. Currently focused on full-stack work with
            Next.js and Node.js.
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="flex flex-wrap gap-3">
            <a
              href="https://drive.google.com/file/d/1eHxP06J-G6CJW1cjroRwORRIV3h135sX/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--ink)] text-[var(--bg)] text-sm font-semibold hover:bg-[var(--ink-muted)] transition-colors duration-150"
            >
              Resume
              <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/Mounieshh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[var(--border)] text-[var(--ink)] text-sm font-semibold hover:bg-[var(--bg-surface)] transition-colors duration-150"
            >
              <FaGithub className="w-4 h-4" aria-hidden="true" />
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="flex items-center justify-center order-1 md:order-2"
        >
          <div className="relative w-[260px] h-[320px] sm:w-[300px] sm:h-[370px] md:w-[340px] md:h-[420px]">
            {/* Offset shadow block */}
            <div
              className="absolute inset-0 rounded-t-full rounded-b-2xl translate-x-3 translate-y-3 bg-[var(--accent-soft)] border border-[var(--border-soft)]"
              aria-hidden="true"
            />
            <div className="relative w-full h-full rounded-t-full rounded-b-2xl overflow-hidden border border-[var(--border-soft)] bg-[var(--bg-surface)]">
              <Image
                src="/assets/mouniesh-ghibli.jpg"
                alt="Mouniesh Vijayakumar"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 300px, 340px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="flex justify-center pb-8"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-[var(--border-soft)] flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-[var(--ink-faint)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
