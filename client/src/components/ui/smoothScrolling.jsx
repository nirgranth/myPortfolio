import Lenis from "lenis";
import { useEffect, useRef } from "react";

export default function SmoothScrolling({ children }) {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Detect small screens & touch devices — disable Lenis for performance
    const isMobile =
      window.innerWidth < 768 ||
      navigator.maxTouchPoints > 1 ||
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // If mobile, do NOT start Lenis — keep natural scroll
    if (isMobile) {
      return;
    }

    // Desktop optimized settings
    const lenis = new Lenis({
      lerp: 0.06, // smoother but cheaper motion
      duration: 0.6,
      wheelMultiplier: 0.9,
      touchMultiplier: 0.6,
      smoothTouch: false, // disabling smooth-touch avoids jank
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (lenisRef.current) lenisRef.current.destroy();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <>{children}</>;
}
