import React, { useEffect, useRef, useState } from "react";

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
};

// Responsive widths & let aspect ratio control height
const sizeMap = {
  sm: "w-full max-w-xs",
  md: "w-full max-w-sm",
  lg: "w-full max-w-md",
};

function GlowCard({
  children,
  className = "",
  glowColor = "blue",
  size = "md",
  width,
  height,
  customSize = false,
}) {
  const cardRef = useRef(null);
  const innerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // 🔍 Track screen size once and on resize
  useEffect(() => {
    if (typeof window === "undefined") return;

    const update = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // 🧠 Pointer-based glow effect — DESKTOP ONLY
  useEffect(() => {
    if (!isDesktop || typeof window === "undefined") return;

    let lastTime = 0;

    const syncPointer = (e) => {
      const now = performance.now();
      // throttle to ~30fps
      if (now - lastTime < 30) return;
      lastTime = now;

      const { clientX: x, clientY: y } = e;

      if (cardRef.current) {
        cardRef.current.style.setProperty("--x", x.toFixed(2));
        cardRef.current.style.setProperty(
          "--xp",
          (x / window.innerWidth).toFixed(2)
        );
        cardRef.current.style.setProperty("--y", y.toFixed(2));
        cardRef.current.style.setProperty(
          "--yp",
          (y / window.innerHeight).toFixed(2)
        );
      }
    };

    document.addEventListener("pointermove", syncPointer, { passive: true });
    return () => document.removeEventListener("pointermove", syncPointer);
  }, [isDesktop]);

  const { base, spread } = glowColorMap[glowColor] || glowColorMap.blue;

  const getSizeClasses = () => {
    if (customSize) return "";
    return sizeMap[size] || sizeMap.md;
  };

  const getInlineStyles = () => {
    const baseStyles = {
      "--base": base,
      "--spread": spread,
      "--radius": "14",
      "--border": "3",
      "--backdrop": "hsl(0 0% 60% / 0.12)",
      "--backup-border": "var(--backdrop)",
      "--size": "200",
      "--outer": isDesktop ? "1" : "0", // hide glow inner blur on mobile
      "--border-size": "calc(var(--border, 2) * 1px)",
      "--spotlight-size": "calc(var(--size, 150) * 1px)",
      "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
      backgroundColor: "var(--backdrop, transparent)",
      backgroundSize:
        "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
      backgroundPosition: "50% 50%",
      backgroundAttachment: isDesktop ? "fixed" : "scroll",
      border: "var(--border-size) solid var(--backup-border)",
      position: "relative",
      touchAction: isDesktop ? "none" : "auto",
    };

    // ✨ Only desktop gets the radial glow background
    if (isDesktop) {
      baseStyles.backgroundImage = `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) var(--saturation, 100) var(--lightness, 70) / var(--bg-spot-opacity, 0.1)),
        transparent
      )`;
    } else {
      baseStyles.backgroundImage = "none";
    }

    // Allow manual width/height override when customSize=true
    if (width !== undefined) {
      baseStyles.width = typeof width === "number" ? `${width}px` : width;
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === "number" ? `${height}px` : height;
    }

    return baseStyles;
  };

  // ✨ Pseudo-element glow CSS — injected ONLY on desktop
  const beforeAfterStyles = `
    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-attachment: fixed;
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
    }
    
    [data-glow]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) var(--saturation, 100) var(--lightness, 50) / var(--border-spot-opacity, 1)), transparent 100%
      );
      filter: brightness(2);
    }
    
    [data-glow]::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(0 100% 100% / var(--border-light-opacity, 1)), transparent 100%
      );
    }
    
    [data-glow] [data-glow] {
      position: absolute;
      inset: 0;
      will-change: filter;
      opacity: var(--outer, 1);
      border-radius: calc(var(--radius) * 1px);
      border-width: calc(var(--border-size) * 20);
      filter: blur(calc(var(--border-size) * 10));
      background: none;
      pointer-events: none;
      border: none;
    }
    
    [data-glow] > [data-glow]::before {
      inset: -10px;
      border-width: 10px;
    }
  `;

  const cardClasses = `
    ${getSizeClasses()}
    ${!customSize ? "aspect-[3/4]" : ""}
    max-w-full
    rounded-2xl 
    relative 
    grid 
    grid-rows-[1fr_auto] 
    shadow-[0_1rem_2rem_-1rem_black] 
    p-4 
    gap-4 
    backdrop-blur-none md:backdrop-blur-[5px]
    ${className}
  `;

  return (
    <>
      {/* Only inject glow CSS on desktop */}
      {isDesktop && (
        <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      )}

      <div
        ref={cardRef}
        // Only desktop gets data-glow and inner glow layer
        {...(isDesktop ? { "data-glow": true } : {})}
        style={getInlineStyles()}
        className={cardClasses}
      >
        {isDesktop && <div ref={innerRef} data-glow></div>}
        {children}
      </div>
    </>
  );
}

export { GlowCard };
