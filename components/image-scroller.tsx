import { useEffect, useRef } from "react";

export default function ImageScroller({ children }) {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={ref} className="rounded-3xl overflow-hidden ">
      <div className="transition-all duration-300 ease-out">{children}</div>
    </div>
  );
}
