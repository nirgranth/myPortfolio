"use client";
import React, { useState } from "react";
import { GlowCard } from "@/components/ui/spotlightCard";
import { ExternalLink, Github, BadgeCheck, Code2, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  { id: "projects", label: "Projects", Icon: Code2 },
  { id: "certs", label: "Certificates", Icon: BadgeCheck },
  { id: "stack", label: "Tech Stack", Icon: Cpu },
];

const projectItems = [
  {
    id: "certificate",
    title: "CertiChain",
    desc: "A blockchain-based system that makes certificate generation and verification fully transparent and impossible to fake.",
    image:
      "/certiChain.PNG",
    tags: ["Web3", "Solidity", "Truffle", "Express", "React"],
    liveUrl: "#",
    codeUrl: "https://github.com/Satyam5167/certiChain",
    glowColor: "indigo",
  },
  {
    id: "lostAndFound",
    title: "TrackItBack",
    desc: "A web app that helps college students quickly report, search, and recover lost items with real-time updates.",
    image:
      "./lostAndFound.PNG",
    tags: ["Social", "Realtime", "Web-App","PERN"],
    liveUrl: "https://lost-and-found-roan.vercel.app/",
    codeUrl: "https://github.com/Satyam5167/Lost-And-Found",
    glowColor: "purple",
  },
  {
    id: "digitalTwin",
    title: "DeDit",
    desc: "DeDiT creates a blockchain-based digital twin for each vaccine vial to track its temperature, potency, and real-time condition.”",
    image:
      "/dedit.PNG",
    tags: ["DigitalTwin", "smartcontracts", "Sepolia", "Pern"],
    liveUrl: "https://dedit.netlify.app/",
    codeUrl: "https://github.com/Satyam5167/dedit",
    glowColor: "brown",
  },
];

const certificateItems = [
  {
    id: "web-dev",
    title: "Full Stack Web Development",
    org: "Online Bootcamp",
    desc: "React, Node.js, REST APIs, and deployment best practices.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    tags: ["Full Stack", "Web", "Certification"],
    glowColor: "green",
  },
  {
    id: "solidity",
    title: "Solidity & Smart Contracts",
    org: "Blockchain Program",
    desc: "Writing, testing, and deploying smart contracts on EVM-compatible chains.",
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Web3", "Solidity", "Blockchain"],
    glowColor: "purple",
  },
  {
    id: "db-cert",
    title: "Databases & PostgreSQL",
    org: "Tech Institute",
    desc: "Relational modeling, indexing, and query optimization with PostgreSQL.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    tags: ["PostgreSQL", "SQL", "Backend"],
    glowColor: "blue",
  },
];

/** Tech stack cards data (logo + label like your screenshot) */
const techStackIcons = [
  {
    id: "html",
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: "css",
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: "js",
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    id: "express",
    name: "Express JS",
    logo:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    id: "node",
    name: "Node JS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: "react",
    name: "React + Native",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: "mongo",
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    id: "jwt",
    name: "JWT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/35/JWT-Logo.svg",
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    logo:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    id: "ts",
    name: "TypeScript",
    logo:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    id: "docker",
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");
  const [zoomItem, setZoomItem] = useState(null);

  const items =
    activeTab === "projects"
      ? projectItems
      : activeTab === "certs"
      ? certificateItems
      : [];

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
          Portfolio Showcase
        </h2>
        <p className="text-gray-300 text-center mb-10 max-w-3xl mx-auto">
          Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path.
        </p>

        {/* Tab navigation panel */}
        <div className="mb-12">
          <div
            className="
              rounded-3xl
              p-2 md:p-3
              flex gap-2 md:gap-4
              bg-white/[0.02]
              border border-white/10
              backdrop-blur-2xl
              shadow-[0_0_18px_rgba(0,0,0,0.45)]
              overflow-x-auto
              no-scrollbar
            "
          >
            {TABS.map(({ id, label, Icon }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id)}
                  className={`
                    flex-shrink-0 md:flex-1
                    flex items-center justify-center gap-2
                    px-4 py-3 md:py-4 rounded-2xl 
                    text-sm md:text-base font-semibold
                    border
                    transition-all duration-300
                    min-w-[9rem] sm:min-w-[10rem]
                    ${
                      active
                        ? "bg-white/[0.05] border-white/20 text-white backdrop-blur-xl"
                        : "bg-transparent border-transparent text-gray-300 hover:bg-white/[0.03] hover:border-indigo-400/80 hover:shadow-[0_0_18px_rgba(129,140,248,0.8)]"
                    }
                  `}
                >
                  <Icon className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="whitespace-nowrap">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content area: projects/certs use GlowCard, tech stack uses icon grid */}
        {activeTab === "stack" ? (
          <TechStackGrid />
        ) : (
          <div className="grid gap-8 md:grid-cols-3">
            {items.map((item) => (
              <GlowCard
                key={item.id}
                glowColor={item.glowColor}
                size="lg"
                className="bg-black/40 border border-white/10 cursor-pointer"
                onClick={() => setZoomItem(item)}
              >
                {/* Image */}
                <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                {/* Title + desc */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  {item.org && (
                    <p className="text-xs text-indigo-200/80 font-medium uppercase tracking-[0.18em]">
                      {item.org}
                    </p>
                  )}
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Tags + links */}
                <div className="mt-3 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-2">
                    {item.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] uppercase tracking-[0.15em] text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {activeTab === "projects" && (
                    <div className="flex items-center justify-between gap-3 pt-1 text-xs">
                      <a
                        href={item.liveUrl}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-indigo-300 hover:text-indigo-100"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live
                      </a>
                      <a
                        href={item.codeUrl}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-gray-200 hover:text-white"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </a>
                    </div>
                  )}
                </div>
              </GlowCard>
            ))}
          </div>
        )}
      </div>

      {/* Zoom modal for projects / certs only */}
      <AnimatePresence>
        {zoomItem && activeTab !== "stack" && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomItem(null)}
          >
            <motion.div
              className="max-w-3xl w-full"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <GlowCard
                glowColor={zoomItem.glowColor}
                size="lg"
                className="bg-black/80 border border-white/20"
                customSize
              >
                <div className="w-full h-64 rounded-xl overflow-hidden mb-4">
                  <img
                    src={zoomItem.image}
                    alt={zoomItem.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-semibold text-white">
                    {zoomItem.title}
                  </h3>
                  {zoomItem.org && (
                    <p className="text-xs text-indigo-200/80 font-medium uppercase tracking-[0.18em]">
                      {zoomItem.org}
                    </p>
                  )}
                  <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                    {zoomItem.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {zoomItem.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {zoomItem.liveUrl && (
                    <div className="flex gap-4 mt-4 text-sm">
                      <a
                        href={zoomItem.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </a>
                      {zoomItem.codeUrl && (
                        <a
                          href={zoomItem.codeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </GlowCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/** Tech stack grid */
function TechStackGrid() {
  return (
    <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {techStackIcons.map((tech) => (
        <motion.div
          key={tech.id}
          whileHover={{
            scale: 1.05,
            y: -4,
          }}
          className="
            group relative overflow-hidden
            rounded-3xl p-6 flex flex-col items-center justify-center
            bg-gradient-to-b 
            from-white/[0.02] via-white/[0.015] to-white/[0.02]
            border border-white/10
            backdrop-blur-xl
            shadow-[0_0_16px_rgba(0,0,0,0.45)]
            transition-all duration-300
          "
        >
          <div
            className="
              w-16 h-16 sm:w-20 sm:h-20 mb-4
              rounded-2xl bg-black/30 border border-white/10 
              flex items-center justify-center
              shadow-[0_0_14px_rgba(0,0,0,0.6)]
              group-hover:shadow-[0_0_22px_rgba(120,180,255,0.45)]
              transition-all duration-300
            "
          >
            <motion.img
              src={tech.logo}
              alt={tech.name}
              loading="lazy"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              whileHover={{ scale: 1.06 }}
            />
          </div>

          <p className="text-xs sm:text-sm font-medium text-gray-100 text-center tracking-wide">
            {tech.name}
          </p>

          <motion.div
            className="
              pointer-events-none absolute inset-0 rounded-3xl opacity-0
              bg-[radial-gradient(circle_at_40%_-20%,rgba(120,180,255,0.25),transparent_65%)]
              mix-blend-screen
            "
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
          />
        </motion.div>
      ))}
    </div>
  );
}
