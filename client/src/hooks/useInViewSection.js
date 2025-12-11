import { useCallback, useEffect, useRef, useState } from "react";

export function useInViewSection({
  root = null,
  rootMargin = "260px 0px", // load a bit earlier for smoother feel
  threshold = 0.15,
  once = true,
} = {}) {
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const observerRef = useRef(null);

  const setRef = useCallback(
    (node) => {
      // Clean up old observer if any
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      if (!node) return;

      // If running on server or IntersectionObserver not available
      if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
        setHasBeenInView(true);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHasBeenInView(true);
            if (once && observerRef.current) {
              observerRef.current.disconnect();
              observerRef.current = null;
            }
          }
        },
        {
          root,
          rootMargin,
          threshold,
        }
      );

      observer.observe(node);
      observerRef.current = observer;
    },
    [root, rootMargin, threshold, once]
  );

  // Extra cleanup on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  return [setRef, hasBeenInView];
}
