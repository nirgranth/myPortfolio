"use client";

import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
            Contact Me
          </h2>
          <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto">
            Got a question, idea, or collaboration in mind? Drop a message and I&apos;ll get back to you soon.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[2fr,1.2fr] items-stretch">
          {/* Contact Form */}
          <div
            className="
              relative overflow-hidden
              rounded-3xl
              bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent
              border border-white/12
              shadow-[0_0_26px_rgba(0,0,0,0.7)]
              backdrop-blur-xl
              p-6 md:p-8
            "
          >
            {/* soft inner glow */}
            <div className="pointer-events-none absolute inset-0 opacity-40 md:opacity-60 mix-blend-screen bg-[radial-gradient(circle_at_0%_0%,rgba(129,140,248,0.25),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(236,72,153,0.2),transparent_55%)]" />

            <div className="relative z-[1]">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
                Let&apos;s work together
              </h3>
              <p className="text-xs md:text-sm text-white/55 mb-6">
                Fill out the form below and I&apos;ll respond as soon as possible.
              </p>

              <form className="space-y-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-medium text-white/70">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="
                      w-full rounded-2xl bg-black/40 border border-white/10
                      px-4 py-3 text-sm
                      text-white placeholder:text-white/35
                      focus:outline-none focus:border-indigo-400/80 focus:ring-1 focus:ring-indigo-400/60
                      transition-colors
                    "
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-medium text-white/70">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="
                      w-full rounded-2xl bg-black/40 border border-white/10
                      px-4 py-3 text-sm
                      text-white placeholder:text-white/35
                      focus:outline-none focus:border-indigo-400/80 focus:ring-1 focus:ring-indigo-400/60
                      transition-colors
                    "
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-medium text-white/70">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Tell me about your project, idea or question..."
                    className="
                      w-full rounded-2xl bg-black/40 border border-white/10
                      px-4 py-3 text-sm resize-none
                      text-white placeholder:text-white/35
                      focus:outline-none focus:border-indigo-400/80 focus:ring-1 focus:ring-indigo-400/60
                      transition-colors
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="
                    w-full mt-3 px-8 py-3 rounded-2xl
                    text-sm md:text-base font-semibold
                    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                    text-white
                    shadow-[0_0_30px_rgba(129,140,248,0.8)]
                    hover:shadow-[0_0_40px_rgba(129,140,248,1)]
                    transition-all
                  "
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Social Connect Card */}
          <div
            className="
              rounded-3xl
              bg-white/[0.02]
              border border-white/10
              backdrop-blur-xl
              shadow-[0_0_22px_rgba(0,0,0,0.65)]
              p-6 md:p-8
              flex flex-col justify-between
            "
          >
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-indigo-200/70 mb-2">
                Stay Connected
              </p>
              <h3 className="text-xl font-semibold text-white mb-2">
                Let&apos;s connect online
              </h3>
              <p className="text-xs md:text-sm text-white/60 mb-6">
                Reach out on any platform that works best for you.
              </p>

              <div className="space-y-3 text-sm">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/satyam-kumar-3797bb278/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group flex items-center justify-between gap-3
                    px-4 py-3 rounded-2xl
                    bg-black/40 border border-white/10
                    hover:border-indigo-400/80
                    hover:bg-indigo-500/10
                    transition-all
                  "
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-indigo-500/10 border border-indigo-300/40 flex items-center justify-center">
                      <Linkedin className="h-4 w-4 text-indigo-200 group-hover:text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm text-pink-400">LinkedIn</span>
                      <span className="text-[11px] text-gray-400">@Satyam Kumar</span>
                    </div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/s4ty4mm/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group flex items-center justify-between gap-3
                    px-4 py-3 rounded-2xl
                    bg-black/40 border border-white/10
                    hover:border-pink-400/80
                    hover:bg-pink-500/10
                    transition-all
                  "
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-pink-500/10 border border-pink-300/40 flex items-center justify-center">
                      <Instagram className="h-4 w-4 text-pink-200 group-hover:text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm text-pink-400">Instagram</span>
                      <span className="text-[11px] text-gray-400">@s4ty4mm</span>
                    </div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Satyam5167"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group flex items-center justify-between gap-3
                    px-4 py-3 rounded-2xl
                    bg-black/40 border border-white/10
                    hover:border-purple-400/80
                    hover:bg-purple-500/10
                    transition-all
                  "
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-purple-500/10 border border-purple-300/40 flex items-center justify-center">
                      <Github className="h-4 w-4 text-purple-200 group-hover:text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-sm text-pink-400">GitHub</span>
                      <span className="text-[11px] text-gray-400">@Satyam5167</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Footer text inside card on desktop, below on mobile */}
            <p className="mt-6 text-[11px] text-white/40">
              Prefer email? Use the form on the left — I&apos;m always open to exciting opportunities.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-10 text-[11px] text-center text-white/35">
          © 2025 · Designed & built by Satyam.
        </p>
      </div>
    </section>
  );
}
