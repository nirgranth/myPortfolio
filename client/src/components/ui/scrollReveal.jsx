"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * ScrollReveal
 * Wrap any section in this to get a smooth scroll-in animation.
 */
function ScrollReveal({ children, className, id }) {
  return (
    <motion.section
      id={id}
      className={cn("relative py-20", className)}
      initial={{ opacity: 0, y: 80, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }} // triggers when ~30% visible
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.section>
  );
}

export { ScrollReveal };
