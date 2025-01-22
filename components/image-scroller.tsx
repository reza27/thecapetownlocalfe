import { useEffect, useRef } from "react";

export default function ImageScroller({ scrollYPos, canScroll, children }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log("can scroll", canScroll);
  }, []);

  const scrollContainerStyles = {
    transform: canScroll
      ? "translateY(" + -scrollYPos + "px)"
      : "translateY(0px)",
  };

  return (
    <div ref={ref} className="rounded-3xl overflow-hidden">
      <div
        className="transition-all duration-300 ease-out"
        style={scrollContainerStyles}
      >
        {children}
      </div>
    </div>
  );
}
