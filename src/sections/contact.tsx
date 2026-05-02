"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate async send — wire up to your preferred email service here
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  };

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="border-b border-[var(--border-soft)] bg-[var(--bg)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex flex-col gap-5"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--ink-faint)]">
              Get in touch
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[var(--ink)] leading-tight">
              Got a project<br />in mind?
            </h2>
            <p className="text-[var(--ink-muted)] leading-relaxed text-base max-w-sm">
              I&apos;m open to freelance work, full-time roles, and interesting
              collaborations. Drop me a message and I&apos;ll get back to you
              within a day.
            </p>
            <a
              href="mailto:iammounieshv@gmail.com"
              className="text-sm font-semibold text-[var(--accent)] hover:underline underline-offset-4 w-fit"
            >
              iammounieshv@gmail.com
            </a>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.08 }}
          >
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--accent-soft)] flex items-center justify-center">
                  <Send className="w-5 h-5 text-[var(--accent)]" aria-hidden="true" />
                </div>
                <p className="font-bold text-[var(--ink)] text-lg">Message sent!</p>
                <p className="text-sm text-[var(--ink-muted)]">
                  Thanks for reaching out. I&apos;ll reply soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm font-semibold text-[var(--accent)] hover:underline underline-offset-4"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
                aria-label="Contact form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-name"
                      className="text-xs font-semibold uppercase tracking-widest text-[var(--ink-faint)]"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface)] text-[var(--ink)] placeholder:text-[var(--ink-faint)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors duration-150"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-semibold uppercase tracking-widest text-[var(--ink-faint)]"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface)] text-[var(--ink)] placeholder:text-[var(--ink-faint)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors duration-150"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-semibold uppercase tracking-widest text-[var(--ink-faint)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-2.5 rounded-md border border-[var(--border-soft)] bg-[var(--bg-surface)] text-[var(--ink)] placeholder:text-[var(--ink-faint)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors duration-150 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[var(--ink)] text-[var(--bg)] text-sm font-semibold hover:bg-[var(--ink-muted)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-150 self-start"
                >
                  {status === "sending" ? (
                    <>
                      <span
                        className="w-4 h-4 rounded-full border-2 border-[var(--bg)]/30 border-t-[var(--bg)] animate-spin"
                        aria-hidden="true"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

