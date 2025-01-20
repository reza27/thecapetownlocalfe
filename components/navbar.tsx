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

    setOpenMenu(false);
  };

  return (
    <div
      id="navbar"
      className="bg-white h-24 md:h-28 flex w-full items-center px-6 md:px-16 fixed z-50 top-0"
    >
      <div className="flex w-full">
        <Link className="cursor-pointer" href="/">
          <img
            className="w-44 md:w-56 h-auto relative z-50"
            src="/thecptlocal3.png"
          />
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
        <div className="absolute top-8 right-4 md:hidden z-50">
          <label htmlFor="check" className="flex flex-col w-14 cursor-pointer">
            <input
              type="checkbox"
              ref={checkBox}
              id="check"
              onClick={() => setOpenMenu(!openMenu)}
            />
            <span className="rounded-lg h-0.5 m-1 bg-red-700"></span>
            <span className="rounded-lg h-0.5 m-1 bg-gray-700"></span>
            <span className="rounded-lg h-0.5 m-1 bg-gray-700"></span>
          </label>
        </div>
      </div>
      <div
        ref={mobiLinks}
        className="md:hidden w-full fixed left-0 right-0 h-screen bg-white flex justify-center transition-all duration-300"
        style={{ top: openMenu ? "0" : "-100vh" }}
      >
        <ul className="relative top-32 text-center text-5xl font-semibold text-dark-grey">
          {links.map((val: ILink) => (
            <li key={val.mobiKey} className="py-2">
              <Link
                href={val.href}
                onClick={linkSelected.bind(this, val)}
                className={activeClass === val.id ? "text-yellow" : ""}
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
