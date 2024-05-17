import { useState, useEffect } from "react";
// Define general type for useWindowSize hook, which includes width and height
interface Size {
  width: number;
  height: number | undefined;
  isMobile: boolean;
}

export function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    width: Infinity,
    height: undefined,
    isMobile: false,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth <= 768,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
