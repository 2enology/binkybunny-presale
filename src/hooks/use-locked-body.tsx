import { useEffect, useLayoutEffect, useRef, useState } from "react";
const useIsomorphicLayoutEffect = process.browser ? useLayoutEffect : useEffect;

type ReturnType = { locked: boolean; setLocked: (v: boolean) => void };

export function useLockedBody(initialLocked = false): ReturnType {
  const [locked, setLocked] = useState(initialLocked);
  const lastScrollTop = useRef<number>(0);

  useIsomorphicLayoutEffect(() => {
    if (!locked) {
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
      window.scroll(0, lastScrollTop.current);
      return;
    }

    // Save initial body style
    const originalOverflow = document.body.style.overflow;

    // Lock body scroll
    document.body.style.overflow = "hidden";

    lastScrollTop.current = window.scrollY;

    if (window.outerWidth <= 769) {
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [locked]);

  // Update state if initialValue changes
  useEffect(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLocked]);

  return { locked, setLocked };
}
