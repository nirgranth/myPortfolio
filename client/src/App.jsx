import React, { Suspense, lazy } from "react";
import { HeroGeometric } from "@/components/ui/shapeLandingHero";
import { AnimeNavBar } from "@/components/ui/animeNavBar";
import { ScrollReveal } from "@/components/ui/scrollReveal";
import { Home, User, FolderGit2, Mail, FileUser } from "lucide-react";
import { useInViewSection } from "./hooks/useInViewSection";

// 🔥 Lazy-load heavy sections to improve performance
const About = lazy(() => import("./components/about.jsx"));
const Portfolio = lazy(() => import("./components/portfolio.jsx"));
const Contact = lazy(() => import("./components/contact.jsx"));

const navItems = [
  { name: "Home", url: "#home", icon: Home },
  { name: "About", url: "#about", icon: User },
  { name: "Portfolio", url: "#portfolio", icon: FolderGit2 },
  { name: "Contact", url: "#contact", icon: Mail },
  {
    name: "Open Cv",
    url: "https://drive.google.com/file/d/1rLFQOKsTECbrP5AP104PB7rYKYrRsrYE/view?usp=sharing",
    icon: FileUser,
  },
];

// Optional loading placeholder
function SectionSkeleton({ label }) {
  return (
    <div className="w-full py-10 flex items-center justify-center text-sm text-white/40">
      Loading {label}…
    </div>
  );
}

export default function App() {
  // 👁 Detect when to mount sections
  const [aboutRef, showAbout] = useInViewSection();
  const [portfolioRef, showPortfolio] = useInViewSection();
  const [contactRef, showContact] = useInViewSection();

  return (
    <>
      {/* Floating Navbar */}
      <AnimeNavBar items={navItems} defaultActive="Home" />

      {/* Hero (always rendered) */}
      <HeroGeometric
        badge="Ready To Innovate"
        title1="A Journey Into"
        title2="Digital Creativity"
      />

      {/* ABOUT SECTION — lazy mounted */}
      <ScrollReveal id="about" className="min-h-screen flex items-center">
        <div ref={aboutRef} className="w-full">
          {showAbout && (
            <Suspense fallback={<SectionSkeleton label="About section" />}>
              <About />
            </Suspense>
          )}
        </div>
      </ScrollReveal>

      {/* PORTFOLIO SECTION */}
      <ScrollReveal id="portfolio">
        <div ref={portfolioRef} className="w-full">
          {showPortfolio && (
            <Suspense fallback={<SectionSkeleton label="Portfolio" />}>
              <Portfolio />
            </Suspense>
          )}
        </div>
      </ScrollReveal>

      {/* CONTACT SECTION */}
      <ScrollReveal id="contact">
        <div ref={contactRef} className="w-full">
          {showContact && (
            <Suspense fallback={<SectionSkeleton label="Contact section" />}>
              <Contact />
            </Suspense>
          )}
        </div>
      </ScrollReveal>
    </>
  );
}
