"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function AnimeNavBar({ items, className, defaultActive = "Home" }) {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(defaultActive);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show on scroll up, hide on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 10) {
        setIsVisible(true);
      } else if (currentY > lastScrollY.current + 5) {
        // scrolling down
        setIsVisible(false);
      } else if (currentY < lastScrollY.current - 5) {
        // scrolling up
        setIsVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  // Hover neon variants (no blinking, only while hovered)
  const hoverNeonVariants = {
    rest: {
      opacity: 0,
      scale: 0.96,
      boxShadow: "0 0 0px rgba(59,130,246,0)",
    },
    hover: {
      opacity: 1,
      scale: 1,
      boxShadow: "0 0 16px rgba(59,130,246,0.75)",
    },
  };

  return (
    <motion.div
      className="fixed top-5 left-0 right-0 z-[9999]"
      initial={{ opacity: 0, y: -20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ pointerEvents: isVisible ? "auto" : "none" }} // avoid click when hidden
    >
      <div className="flex justify-center pt-6">
        <div
          className={cn(
            "flex items-center gap-3 bg-black/50 border border-white/10 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg relative",
            className
          )}
        >
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <motion.a
                key={item.name}
                href={item.url}
                rel="noreferrer"
                onClick={() => setActiveTab(item.name)}
                initial="rest"
                animate="rest"
                whileHover="hover"
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300",
                  "text-white/70 hover:text-white",
                  isActive && "text-white"
                )}
              >
                {/* Active animated background */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="absolute inset-0 bg-primary/25 rounded-full blur-md" />
                    <div className="absolute inset-[-4px] bg-primary/20 rounded-full blur-xl" />
                    <div className="absolute inset-[-8px] bg-primary/15 rounded-full blur-2xl" />
                    <div className="absolute inset-[-12px] bg-primary/5 rounded-full blur-3xl" />

                    <div
                      className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                      style={{ animation: "shine 3s ease-in-out infinite" }}
                    />
                  </motion.div>
                )}

                {/* Blue neon hover glow – works on ALL tabs, including Home */}
                <motion.div
                  variants={hoverNeonVariants}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full -z-10 border border-pink-400"
                />

                {/* Desktop label */}
                <span className="hidden md:inline relative z-10">
                  {item.name}
                </span>

                {/* Mobile icon */}
                <motion.span
                  className="md:hidden relative z-10"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} strokeWidth={2.5} />
                </motion.span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export { AnimeNavBar };
