"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [mobiLinksPosition, setMobiLinksPosition] = useState({ top: "-100vh" });
  const mobiLinks = useRef<HTMLInputElement | null>(null);
  const checkBox = useRef<HTMLInputElement | null>(null);

  interface ILink {
    id: number;
    text: string;
    href: string;
  }

  const links: ILink[] = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "Tours", href: "/tours" },
    { id: 3, text: "Services", href: "/services" },
    { id: 4, text: "About", href: "/about" },
    { id: 5, text: "Contact", href: "/contact" },
  ];

  const [activeClass, setActiveClass] = useState(1);

  const linkSelected = (event: ILink) => {
    setActiveClass(event.id);
    onHamburgerClick();
    if (checkBox.current) {
      checkBox.current.checked = false;
    }
  };

  useEffect(() => {
    console.log("activeClass", activeClass);
  }, [activeClass]);

  const onHamburgerClick = () => {
    setOpenMenu(!openMenu);
    if (!openMenu) {
      setMobiLinksPosition({ top: "0" });
    } else {
      setMobiLinksPosition({ top: "-100vh" });
    }
  };
  return (
    <div id="navbar" className="bg-white dark:bg-black">
      <div id="navbar-inner">
        <Link className="logo-link" href="/">
          <img className="logo" src="/thecptlocal3.png" />
        </Link>
        <div className="links">
          <ul>
            {links.map((val: ILink) => (
              <li>
                <Link
                  href={val.href}
                  onClick={linkSelected.bind(this, val)}
                  className={activeClass === val.id ? "selected" : ""}
                  key={val.id}
                >
                  {val.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hamburger-container">
          <label htmlFor="check">
            <input
              type="checkbox"
              ref={checkBox}
              id="check"
              onClick={onHamburgerClick}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>
      <div ref={mobiLinks} className="mobi-links" style={mobiLinksPosition}>
        <ul>
          {links.map((val) => (
            <li>
              <Link
                href={val.href}
                onClick={linkSelected.bind(this, val)}
                className={activeClass === val.id ? "selected" : ""}
                key={val.id}
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
