"use client";
import satyamPic from "../../assets/satyam.jpg";
import { motion } from "framer-motion";
import {
  Circle,
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ProfileCard from "@/components/ui/profileCard";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function HeroBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}

function HeroGeometric({
  badge = "Ready to Innovate",
  title1 = "Full Stack",
  title2 = "Developer",
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.4 + i * 0.18,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const techStack = ["React", "Javascript", "Node.js", "PostgreSQL"];

  return (
    <>
      <HeroBackground />

      <section
        id="home"
        className="
          relative min-h-screen w-full flex items-center overflow-hidden
          pt-32 md:pt-28 xl:pt-0
        "
      >
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            {/* LEFT: Text + chips + buttons + icons */}
            <div className="max-w-xl mx-auto text-center md:text-left">
              {/* Badge */}
              <motion.div
                custom={0}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex justify-center md:justify-start">
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 md:mb-8">
                    <Circle className="h-2 w-2 fill-rose-500/80" />
                    <span className="text-sm text-white/60 tracking-wide">
                      {badge}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Heading */}
              <motion.div
                custom={1}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
              >
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-3 md:mb-4 tracking-tight text-center md:text-left">
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
                    {title1}
                  </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 block">
                    {title2}
                  </span>
                </h1>
              </motion.div>

              {/* Subheading */}
              <motion.p
                custom={2}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="text-lg md:text-2xl text-white/80 mb-3 md:mb-4 text-center md:text-left"
              >
                Computer Science &amp; Engg. Student
                <span className="text-indigo-300"> </span>
              </motion.p>

              {/* Paragraph */}
              <motion.p
                custom={3}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="text-base sm:text-lg md:text-xl text-white/55 mb-6 leading-relaxed font-light tracking-wide max-w-xl mx-auto md:mx-0 text-center md:text-left"
              >
                Enhancing digital experiences that are smooth, scalable, and
                made to impress. I focus on building thoughtful interfaces and
                reliable systems that feel effortless to use.
              </motion.p>

              {/* Tech chips */}
              <motion.div
                custom={4}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap justify-center md:justify-start gap-3 mb-7"
              >
                {techStack.map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/75 shadow-[0_0_18px_rgba(0,0,0,0.7)]"
                  >
                    {tech}
                  </div>
                ))}
              </motion.div>

              {/* Primary buttons */}
              <motion.div
                custom={5}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8"
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-black/80 border border-white/15 shadow-[0_0_32px_rgba(0,0,0,0.9)] hover:border-indigo-400/80 hover:bg-indigo-500/20 text-sm font-semibold text-white transition-colors"
                  onClick={() => {
                    const el = document.getElementById("portfolio");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                >
                  <span>Projects</span>
                  <ExternalLink className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/20 hover:border-rose-400/80 hover:bg-rose-500/15 text-sm font-semibold text-white transition-colors "
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                >
                  <span>Contact</span>
                  <Mail className="h-4 w-4" />
                </button>
              </motion.div>

              {/* Social icons */}
              <motion.div
                custom={6}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center justify-center md:justify-start gap-4"
              >
                {[
                  { Icon: Github, label: "GitHub", link: "https://github.com/Satyam5167" },
                  {
                    Icon: Linkedin,
                    label: "LinkedIn",
                    link: "https://www.linkedin.com/in/satyam-kumar-3797bb278/",
                  },
                  {
                    Icon: Instagram,
                    label: "Instagram",
                    link: "https://www.instagram.com/s4ty4mm/",
                  },
                ].map(({ Icon, label, link }) => (
                  <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="
                        h-11 w-11 rounded-2xl bg-black/70 border border-white/15 
                        flex items-center justify-center
                        hover:border-indigo-400/80 hover:bg-indigo-500/15
                        transition-colors shadow-[0_0_20px_rgba(0,0,0,0.85)]
                      "
                    >
                    <Icon className="h-5 w-5 text-white/80" />
                  </a>
                ))}
              </motion.div>

            </div>

            {/* RIGHT: Profile card */}
            <motion.div
              custom={7}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-end mt-10 md:mt-0"
            >
              <div className="w-full max-w-sm md:pr-6 lg:pr-10">
                <ProfileCard
                  name="Satyam Kumar"
                  title="Backend & Web3 Developer"
                  handle="satyam"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl={satyamPic}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => {
                    const el = document.getElementById("contact");
                    if (el) {
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export { HeroGeometric };
