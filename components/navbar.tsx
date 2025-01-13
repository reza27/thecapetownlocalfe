"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { isMobile } from "react-device-detect";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const mobiLinks = useRef<HTMLDivElement | null>(null);
  const checkBox = useRef<HTMLInputElement | null>(null);

  interface ILink {
    id: number;
    text: string;
    href: string;
    key: string;
    mobiKey: string;
  }

  const links: ILink[] = [
    { id: 1, key: "01", mobiKey: "001", text: "Home", href: "/" },
    { id: 2, key: "02", mobiKey: "002", text: "Tours", href: "/tours" },
    // { id: 3, key: "03", mobiKey: "003", text: "Services", href: "/services" },
    { id: 4, key: "04", mobiKey: "004", text: "About", href: "/about" },
    { id: 5, key: "05", mobiKey: "005", text: "Contact", href: "/contact" },
  ];

  const [activeClass, setActiveClass] = useState(1);

  const linkSelected = (event: ILink) => {
    setActiveClass(event.id);
    if (checkBox.current) {
      checkBox.current.checked = false;
    }

    if (isMobile) {
      setOpenMenu(false);
    }
  };

  return (
    <div className="bg-white h-32 flex w-full relative items-center px-12">
      <div className="flex w-full">
        <Link className="cursor-pointer" href="/">
          <img className="w-56 h-auto" src="/thecptlocal3.png" />
        </Link>
        <div className="flex ml-auto">
          <ul className=" text-cpt-black hidden md:flex items-center text-sm ">
            {links.map((val: ILink) => (
              <li key={val.key}>
                <Link
                  href={val.href}
                  onClick={linkSelected.bind(this, val)}
                  className={
                    activeClass === val.id
                      ? "selected pl-3 text-sm font-normal"
                      : "pl-3 text-sm font-normal"
                  }
                >
                  {val.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute top-5 right-3 md:hidden">
          <label htmlFor="check">
            <input
              type="checkbox"
              ref={checkBox}
              id="check"
              onClick={() => setOpenMenu(!openMenu)}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>
      <div
        ref={mobiLinks}
        className="md:hidden"
        style={{ top: openMenu ? "0" : "-100vh" }}
      >
        <ul>
          {links.map((val: ILink) => (
            <li key={val.mobiKey}>
              <Link
                href={val.href}
                onClick={linkSelected.bind(this, val)}
                className={activeClass === val.id ? "selected" : ""}
              >
                {val.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
