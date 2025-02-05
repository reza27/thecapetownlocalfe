import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap/all";
import Link from "next/link";

export const FancyButton = ({ className, isOutlined, href = "", children }) => {
  const buttonElement = useRef<HTMLSpanElement | null>(null);
  const buttonFlairElement = useRef<HTMLSpanElement | null>(null);
  const buttonLabelElement = useRef<HTMLSpanElement | null>(null);

  let xSet;
  let ySet;

  const init = () => {
    xSet = gsap.quickSetter(buttonFlairElement.current, "xPercent");
    ySet = gsap.quickSetter(buttonFlairElement.current, "yPercent");
  };

  const initEvents = () => {
    buttonElement.current?.addEventListener("mouseenter", (e) => {
      const { x, y } = getXY(e);

      xSet(x);
      ySet(y);

      gsap.to(buttonFlairElement.current, {
        scale: 1,
        duration: 0.7,
        ease: "power2.out",
      });
    });
    buttonElement.current?.addEventListener("mouseleave", (e) => {
      const { x, y } = getXY(e);

      gsap.killTweensOf(buttonFlairElement.current);

      gsap.to(buttonFlairElement.current, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    buttonElement.current?.addEventListener("mousemove", (e) => {
      const { x, y } = getXY(e);

      gsap.to(buttonFlairElement.current, {
        xPercent: x,
        yPercent: y,
        duration: 0.4,
        ease: "power2",
      });
    });
  };

  const getXY = (e) => {
    const { left, top, width, height } =
      buttonElement.current!.getBoundingClientRect();

    const xTransformer = gsap.utils.pipe(
      gsap.utils.mapRange(0, width, 0, 100),
      gsap.utils.clamp(0, 100)
    );

    const yTransformer = gsap.utils.pipe(
      gsap.utils.mapRange(0, height, 0, 100),
      gsap.utils.clamp(0, 100)
    );

    return {
      x: xTransformer(e.clientX - left),
      y: yTransformer(e.clientY - top),
    };
  };

  useEffect(() => {
    init();
    initEvents();
  }, []);

  return (
    <span className={className} ref={buttonElement}>
      {isOutlined ? (
        <Link
          href={href}
          className="button after:inset-0 after:absolute !bg-transparent after:border after:border-white after:rounded-3xl after:content-[''] after:pointer-events-none"
          onClick={(e) => {
            if (!href) {
              e.preventDefault();
            }
          }}
        >
          <span
            ref={buttonFlairElement}
            className="button__flair inset-1 m-2 box-content absolute pointer-events-none scale-0 origin-center will-change-transform"
          ></span>
          <span
            ref={buttonLabelElement}
            className="button__label text-xs font-medium py-3 px-9 hover:text-gray-800"
          >
            {children}
          </span>
        </Link>
      ) : (
        <Link
          href={href}
          className="button !bg-blue after:inset-0 after:absolute after:border after:border-blue after:rounded-3xl after:content-[''] after:pointer-events-none"
          data-block="button"
          onClick={(e) => {
            if (!href) {
              e.preventDefault();
            }
          }}
        >
          <span
            ref={buttonFlairElement}
            className="button__flair before:!bg-gray-50 inset-0 absolute pointer-events-none scale-0 origin-center will-change-transform"
          ></span>
          <span
            ref={buttonLabelElement}
            className="button__label text-xs font-medium py-3 px-8 hover:text-blue"
          >
            {children}
          </span>
        </Link>
      )}
    </span>
  );
};
