"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { sendGAEvent } from "@next/third-parties/google";
import ImageLoader from "./image-loader";
import Image from "next/image";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const mobiLinks = useRef<HTMLDivElement | null>(null);
  const checkBox = useRef<HTMLInputElement | null>(null);

  // const waImageStyle = {
  //   objectFit: "contain",
  //   objectPosition: "center bottom",
  //   height: "60px",
  //   width: "60px",
  //   overflow: "hidden",
  // };

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
    { id: 4, key: "03", mobiKey: "003", text: "About", href: "/about" },
    { id: 5, key: "04", mobiKey: "004", text: "Contact", href: "/contact" },
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
      className="bg-white h-24 lg:h-28 flex w-full items-center px-6 lg:px-16 fixed z-50 top-0 justify-center"
    >
      <div className="flex w-full max-w-[1700px]">
        <div className="hidden lg:flex w-1/3">
          <ul className=" text-cpt-black hidden lg:flex items-center text-sm">
            {links.map((val: ILink) => (
              <li key={val.key}>
                <Link
                  href={val.href}
                  onClick={linkSelected.bind(this, val)}
                  className={
                    activeClass === val.id
                      ? "selected pl-3 text-sm font-normal tracking-tighter text-yellow"
                      : "pl-3 text-sm font-normal tracking-tighter hover:text-yellow"
                  }
                >
                  {val.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link
          className="cursor-pointer w-1/2 lg:w-1/3 flex lg:justify-center items-center"
          href="/"
        >
          <img
            className="w-44 md:w-56 h-auto relative z-10"
            src="/thecptlocal3.png"
          />
        </Link>

        <div className="hidden w-1/3 justify-end items-center lg:flex">
          <a
            id="whatsapp"
            className="flex items-center"
            href="https://wa.me/27789803335"
            target="_blank"
            onClick={() => {
              sendGAEvent("event", "whatsapp", {
                action: "WhatsApp opened",
              });
            }}
          >
            <p className="hover:text-gray-700 pr-3 text-sm font-normal tracking-tighter">
              WhatsApp
            </p>

            <Image
              loader={ImageLoader}
              src="/WhatsApp.svg"
              width={40}
              height={40}
              style={{
                objectFit: "contain",
                objectPosition: "center bottom",
                height: "40px",
                width: "40px",
              }}
              alt="whatsapp"
            />
          </a>
        </div>

        <div className="absolute top-8 right-4 lg:hidden z-50">
          <label htmlFor="check" className="flex flex-col w-14 cursor-pointer">
            <input
              type="checkbox"
              ref={checkBox}
              id="check"
              onClick={() => setOpenMenu(!openMenu)}
            />
            <span
              className="rounded-lg h-0.5 m-1"
              style={{ background: openMenu ? "#B7D9FF" : "#616161" }}
            ></span>
            <span
              className="rounded-lg h-0.5 m-1"
              style={{ background: openMenu ? "#B7D9FF" : "#616161" }}
            ></span>
            <span
              className="rounded-lg h-0.5 m-1"
              style={{ background: openMenu ? "#B7D9FF" : "#616161" }}
            ></span>
          </label>
        </div>
      </div>
      <div
        ref={mobiLinks}
        className="lg:hidden w-full fixed left-0 top-0 right-0 h-screen bg-blue flex flex-col transition-all duration-500 z-20"
        style={{ left: openMenu ? "0" : "-100vw" }}
      >
        <div className="flex justify-center items-center w-full relative top-24">
          <Image
            loader={ImageLoader}
            src="/thecptlocalblue@2x.png"
            width={220}
            height={50}
            style={{
              objectFit: "contain",
              objectPosition: "center bottom",
              height: "50px",
              width: "220px",
            }}
            alt="logo white"
          />
        </div>
        <ul className="relative top-40 text-center text-4xl font-medium text-white tracking-tight">
          {links.map((val: ILink) => (
            <li key={val.mobiKey} className="py-4">
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
        <div className="absolute bottom-16 justify-center items-center w-full flex">
          <Link
            href="https://www.tripadvisor.co.za/Attraction_Review-g312659-d17543425-Reviews-The_Cape_Town_Local-Cape_Town_Central_Western_Cape.htmly"
            target="_blank"
          >
            <Image
              loader={ImageLoader}
              src="/tripadvisor.svg"
              width={40}
              height={40}
              className="fill-white invert brightness-0 mr-5"
              style={{
                objectFit: "contain",
                objectPosition: "center bottom",
                height: "40px",
                width: "40px",
              }}
              alt="tripadvisor white"
            />
          </Link>
          <Link
            href="https://www.instagram.com/thecapetownlocal/?hl=en"
            target="_blank"
          >
            <Image
              loader={ImageLoader}
              src="/instagram-logo-glyph.png"
              width={40}
              height={40}
              className="invert brightness-0 mr-5"
              style={{
                objectFit: "contain",
                objectPosition: "center bottom",
                height: "40px",
                width: "40px",
              }}
              alt="instagram white"
            />
          </Link>
          <Link
            href="https://www.facebook.com/thecapetownlocal"
            target="_blank"
          >
            <Image
              loader={ImageLoader}
              src="/facebook.svg"
              width={32}
              height={32}
              className="invert brightness-0"
              style={{
                objectFit: "contain",
                objectPosition: "center bottom",
                height: "32px",
                width: "32px",
              }}
              alt="fb white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
