"use client";

import React from "react";
import {
  FileText,
  Code2,
  BadgeCheck,
  Globe2,
  ArrowUpRight,
} from "lucide-react";

export default function About() {
  const scrollToPortfolio = () => {
    const el = document.getElementById("portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const stats = [
    {
      label: "TOTAL PROJECTS",
      value: "4",
      subtitle: "Innovative web & mobile solutions crafted",
      icon: Code2,
      highlight: true, // first card has a tiny yellow-ish edge like screenshot
    },
    {
      label: "CERTIFICATES",
      value: "3",
      subtitle: "Professional skills validated",
      icon: BadgeCheck,
      highlight: false,
    },
    {
      label: "YEARS OF EXPERIENCE",
      value: "0",
      subtitle: "Continuous learning journey",
      icon: Globe2,
      highlight: false,
    },
  ];

  return (
    <section id="about" className="w-full py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
          About Me
        </h2>

        {/* Paragraph */}
        <p className="text-gray-200/90 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          Hello, I&apos;m{" "}
          <span className="font-semibold text-white">Satyam Kumar</span>,
          passionate about building smart and scalable web &amp; mobile
          applications. I&apos;ve completed a full-stack development journey and
          constantly explore new technologies to refine my skills. Focused on
          continuous learning, I aim to grow into the IT industry and eventually
          move towards AI and data science.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {/* Download CV – opens Drive in new tab */}
          <a
            href="https://drive.google.com/file/d/1rLFQOKsTECbrP5AP104PB7rYKYrRsrYE/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2 px-6 py-3 rounded-2xl
              text-sm md:text-base font-semibold
              bg-gradient-to-r from-indigo-500 to-purple-500
              text-white shadow-[0_0_28px_rgba(129,140,248,0.7)]
              hover:shadow-[0_0_36px_rgba(129,140,248,0.9)]
              transition-all duration-200
            "
          >
            <FileText className="h-4 w-4" />
            <span>Download CV</span>
          </a>

          {/* View Projects – scroll to portfolio */}
          <button
            type="button"
            onClick={scrollToPortfolio}
            className="
              inline-flex items-center gap-2 px-6 py-3 rounded-2xl
              text-sm md:text-base font-semibold
              border border-white/15 bg-white/[0.03]
              text-white backdrop-blur-xl
              hover:border-purple-400/80 hover:bg-purple-500/15
              transition-all duration-200
            "
          >
            <Code2 className="h-4 w-4" />
            <span>View Projects</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Stat Cards – all navigate to portfolio on click */}
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map(({ label, value, subtitle, icon: Icon, highlight }) => (
            <button
              key={label}
              type="button"
              onClick={scrollToPortfolio}
              className={`
                group relative w-full text-left
                min-h-[170px] sm:min-h-[180px]
                rounded-[26px]
                bg-gradient-to-br from-black/70 via-black/60 to-black/70
                border border-white/10
                px-5 py-5 sm:px-6 sm:py-6
                flex flex-col justify-between
                shadow-[0_18px_32px_rgba(0,0,0,0.85)]
                transition-transform duration-300
                hover:scale-[1.02]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400
              `}
            >
              
              {/* Top row: icon + value */}
              <div className="relative z-10 flex items-center justify-between mb-4 sm:mb-5">
                <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white/5 border border-white/15 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-white/85" />
                </div>
                <div className="text-3xl sm:text-4xl font-semibold text-white">
                  {value}
                </div>
              </div>

              {/* Bottom row: label + subtitle + arrow */}
              <div className="relative z-10 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] sm:text-xs tracking-[0.18em] text-gray-300/95 uppercase mb-1.5">
                    {label}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-200/90 max-w-[240px]">
                    {subtitle}
                  </p>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-300/90 shrink-0" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
