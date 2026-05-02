"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs,
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiRedux, SiExpress,
  SiFirebase, SiMongodb, SiMysql, SiPostgresql,
  SiFastapi, SiPostman, SiGithubactions, SiJsonwebtokens,
} from "react-icons/si";

const EASE = [0.22, 1, 0.36, 1] as const;

const SKILL_GROUPS = [
  {
    label: "Languages",
    skills: [
      { icon: <FaJava />, name: "Java" },
      { icon: <FaPython />, name: "Python" },
      { icon: <FaJs />, name: "JavaScript" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiRedux />, name: "Redux" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <SiFastapi />, name: "FastAPI" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <SiJsonwebtokens />, name: "JWT" },
      { icon: <SiPostman />, name: "REST APIs" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
    ],
  },
  {
    label: "DevOps",
    skills: [
      { icon: <FaDocker />, name: "Docker" },
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <SiGithubactions />, name: "Actions" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      aria-label="Skills"
      className="border-b border-[var(--border-soft)] bg-[var(--bg-surface)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--ink-faint)] mb-3">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[var(--ink)]">
            What I work with
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                ease: EASE,
                delay: gi * 0.06,
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--ink-faint)] mb-4">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(({ icon, name }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[var(--border-soft)] bg-[var(--bg)] text-sm font-medium text-[var(--ink-muted)] hover:text-[var(--ink)] hover:border-[var(--border)] transition-colors duration-150"
                  >
                    <span className="text-base" aria-hidden="true">{icon}</span>
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
