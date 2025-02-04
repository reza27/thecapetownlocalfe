import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap/all";
import Link from "next/link";

export const FancyButton = ({
  className,
  isOutlined,
  href = "#",
  children,
}) => {
  const buttonElement = useRef<HTMLSpanElement | null>(null);
  const buttonFlairElement = useRef<HTMLSpanElement | null>(null);
  const buttonLabelElement = useRef<HTMLSpanElement | null>(null);

  let xSet;
  let ySet;

  const init = () => {
    xSet = gsap.quickSetter(buttonFlairElement.current, "xPercent");
    ySet = gsap.quickSetter(buttonFlairElement.current, "yPercent");

    console.log("button init");
  };

  const initEvents = () => {
    console.log("button event");

    buttonElement.current?.addEventListener("mouseenter", (e) => {
      const { x, y } = getXY(e);

      xSet(x);
      ySet(y);
      console.log("me", buttonFlairElement.current);

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

    console.log("left", left);
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
    console.log("button");
    init();
    initEvents();
  }, []);

  return (
    <span className={className} ref={buttonElement}>
      {isOutlined ? (
        <Link href={href} className="button button--stroke" data-block="button">
          <span ref={buttonFlairElement} className="button__flair"></span>
          <span
            ref={buttonLabelElement}
            className="button__label text-xs font-normal py-3 px-8 hover:text-gray-800"
          >
            {children}
          </span>
        </Link>
      ) : (
        <Link href={href} className="button button--stroke" data-block="button">
          <span ref={buttonFlairElement} className="button__flair"></span>
          <span
            ref={buttonLabelElement}
            className="button__label text-xs font-normal py-3 px-8 hover:text-gray-800"
          >
            {children}
          </span>
        </Link>
      )}
    </span>
  );
};
