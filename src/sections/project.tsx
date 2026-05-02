"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const EASE = [0.22, 1, 0.36, 1] as const;

const PROJECTS = [
  {
    image: "/project/Spark.jpg",
    title: "SparkHub",
    description:
      "A Learning Management Platform built with Next.js, Firebase, and Spline 3D. Supports course creation, progress tracking, and interactive 3D onboarding.",
    link: "https://spark-hub-one.vercel.app/",
    linkLabel: "Live site",
    tags: ["Next.js", "Firebase", "Spline 3D"],
    featured: true,
  },
  {
    image: "/project/Book.jpg",
    title: "Book It",
    description:
      "Hall Booking System with MERN Stack and JWT. Includes role-based authentication and real-time notifications.",
    link: "https://book-it-mern-app-mk.vercel.app/",
    linkLabel: "Live site",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    featured: true,
  },
  {
    image: "/project/Goal.jpg",
    title: "Goals Setter",
    description:
      "Task Management App with MERN Stack and Redux Toolkit. Secured with JWT and features real-time notifications.",
    link: "https://github.com/Mounieshh/Goal_Setter_App",
    linkLabel: "GitHub",
    tags: ["Redux", "MERN", "JWT"],
    featured: false,
  },
  {
    image: "/project/promptopia.png",
    title: "Promptopia",
    description:
      "AI prompt-sharing platform allowing users to create, edit, and manage prompts seamlessly.",
    link: "https://github.com/Mounieshh/promptopia_nextjs",
    linkLabel: "GitHub",
    tags: ["Next.js", "MongoDB"],
    featured: false,
  },
  {
    image: "/project/sub-tracker.png",
    title: "Subscription Tracker API",
    description:
      "Production-ready API to manage user subscriptions and send automated renewal reminders.",
    link: "https://github.com/Mounieshh/subscription-tracker-api",
    linkLabel: "GitHub",
    tags: ["Node.js", "Express", "MongoDB"],
    featured: false,
  },
];

export default function ProjectSection() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-label="Projects"
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
            Selected work
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[var(--ink)]">
            Things I&apos;ve built
          </h2>
        </motion.div>

        {/* Featured — large cards stacked */}
        <div className="flex flex-col gap-6 mb-6">
          {featured.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                ease: EASE,
                delay: i * 0.08,
              }}
              className="group grid grid-cols-1 md:grid-cols-2 gap-0 border border-[var(--border-soft)] rounded-xl overflow-hidden bg-[var(--bg)] hover:border-[var(--border)] transition-colors duration-200"
            >
              {/* Image */}
              <div className={`relative h-56 md:h-72 overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-center gap-4 p-8 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--ink-faint)] border border-[var(--border-soft)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[var(--ink)]">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors duration-150 w-fit"
                  aria-label={`${project.linkLabel} for ${project.title}`}
                >
                  {project.linkLabel}
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Rest — compact list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                ease: EASE,
                delay: i * 0.06,
              }}
              className="group flex flex-col border border-[var(--border-soft)] rounded-xl overflow-hidden bg-[var(--bg)] hover:border-[var(--border)] transition-colors duration-200"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-3 p-5 flex-1">
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--ink-faint)] border border-[var(--border-soft)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-black text-[var(--ink)] text-base">{project.title}</h3>
                <p className="text-xs text-[var(--ink-muted)] leading-relaxed flex-1">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors duration-150 w-fit mt-auto"
                  aria-label={`${project.linkLabel} for ${project.title}`}
                >
                  {project.linkLabel}
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://github.com/Mounieshh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[var(--border)] text-sm font-semibold text-[var(--ink)] hover:bg-[var(--bg-surface)] transition-colors duration-150"
          >
            <FaGithub className="w-4 h-4" aria-hidden="true" />
            See all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

