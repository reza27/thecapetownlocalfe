import { useEffect } from "react";

export default function ImageScroller({ scrollYPos, children }) {
  return (
    <div className="rounded-3xl overflow-hidden">
      <div
        className="transition-all duration-200 ease-out"
        style={{
          transform: "translateY(" + -scrollYPos + "px)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
