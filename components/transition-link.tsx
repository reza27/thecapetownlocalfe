"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  className,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const main = document.querySelector("main");

    main?.classList.add("page-transition");

    await sleep(500);
    router.push(href);
    await sleep(500);

    main?.classList.remove("page-transition");
  };

  return (
    <Link
      {...props}
      className={className}
      href={href}
      onClick={handleTransition}
    >
      {children}
    </Link>
  );
};
