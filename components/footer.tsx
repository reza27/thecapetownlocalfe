"use client";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div id="footer" className="bg-white dark:bg-black">
      <div className="social-media-links">
        <img className="logo" src="/thecptlocal2.png" />
        <p className="email">info@thecapetownlocal.com</p>
        <ul>
          <li>
            <Link
              target="blank"
              href="https://www.instagram.com/thecapetownlocal/?hl=en"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>
          <li>
            <Link
              target="blank"
              href="https://www.facebook.com/thecapetownlocal"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </li>
          <li>
            <Link
              target="blank"
              href="https://www.tripadvisor.co.za/Attraction_Review-g312659-d17543425-Reviews-The_Cape_Town_Local-Cape_Town_Central_Western_Cape.html"
            >
              <img src="/tripadvisor-logo.png" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="links ">
        <p className="footer-heading">Company</p>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/tours">Tours</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </div>
      <div className="links">
        <p className="footer-heading">Other links</p>
        <ul>
          <Link href="/indemnity">Indemnity Form</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/refund-policy">Refund Policy</Link>
        </ul>
      </div>
    </div>
  );
}
