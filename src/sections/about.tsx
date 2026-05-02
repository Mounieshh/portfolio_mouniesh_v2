"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const EASE = [0.22, 1, 0.36, 1] as const;

const EXPERIENCE = [
  {
    period: "Apr 2025 – Jul 2025",
    role: "Backend API Developer Intern",
    company: "Hyperready Technology",
    description:
      "Worked on CloseBI, a real-time industry project. Implemented AI-driven analysis features for SEO optimisation.",
  },
  {
    period: "Apr 2024 – Sep 2024",
    role: "Frontend Developer Intern",
    company: "The Foundax Company",
    description:
      "Refactored a legacy HTML/CSS site into a modern Next.js app, improving load speed and maintainability. Implemented responsive design for cross-device consistency.",
  },
  {
    period: "Jan 2024 – Feb 2024",
    role: "React Developer Intern",
    company: "Vantage Flow",
    description:
      "Built a Contact Manager with React.js. Modularised the UI into reusable components, reducing future maintenance effort by 40%.",
  },
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
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About"
      className="border-b border-[var(--border-soft)] bg-[var(--bg)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">

        {/* Bio row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-20 md:mb-28">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="flex justify-center"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <div
                className="absolute inset-0 rounded-full translate-x-3 translate-y-3 bg-[var(--accent-soft)] border border-[var(--border-soft)]"
                aria-hidden="true"
              />
              <div className="relative w-full h-full rounded-full overflow-hidden border border-[var(--border-soft)] bg-[var(--bg-surface)]">
                <Image
                  src="/assets/profile.jpg"
                  alt="Mouniesh Vijayakumar"
                  fill
                  className="object-cover scale-110 translate-y-4"
                  sizes="(max-width: 768px) 224px, 288px"
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.08 }}
            className="flex flex-col gap-5"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--ink-faint)]">
              About me
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[var(--ink)] leading-tight">
              Crafting code<br />with purpose
            </h2>
            <p className="text-[var(--ink-muted)] leading-relaxed text-base md:text-lg max-w-prose">
              I&apos;m a dedicated software engineer with a knack for building
              efficient, modern web applications. I enjoy solving real-world
              problems with clean, scalable code and love exploring new
              technologies.
            </p>
            <div className="flex gap-3">
              {SOCIAL.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[var(--border-soft)] text-sm font-semibold text-[var(--ink-muted)] hover:text-[var(--ink)] hover:border-[var(--border)] transition-colors duration-150"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--ink-faint)] mb-3">
            Experience
          </p>
          <h3 className="text-2xl md:text-3xl font-black text-[var(--ink)] mb-10">
            Where I&apos;ve worked
          </h3>

          <ol className="relative border-l border-[var(--border-soft)] flex flex-col gap-0" aria-label="Work experience timeline">
            {EXPERIENCE.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.4,
                  ease: EASE,
                  delay: i * 0.08,
                }}
                className="relative pl-8 pb-10 last:pb-0"
              >
                {/* Timeline dot */}
                <span
                  className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--accent)] border-2 border-[var(--bg)]"
                  aria-hidden="true"
                />
                <time className="text-xs font-semibold uppercase tracking-widest text-[var(--ink-faint)] block mb-1">
                  {item.period}
                </time>
                <h4 className="font-bold text-[var(--ink)] text-base md:text-lg">
                  {item.role}
                </h4>
                <p className="text-sm font-semibold text-[var(--accent)] mb-2">
                  {item.company}
                </p>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed max-w-prose">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}

