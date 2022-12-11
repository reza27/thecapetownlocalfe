import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  return (
    <div id="footer" className="bg-white dark:bg-black">
      <div className="social-media-links">
        <img className="logo" src="/thecptlocal2.png" />
        <p className="email">info@thecapetownlocal.com</p>
        <ul>

          <li>
            <Link href="/">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </li>
        </ul>

      </div>
      <div className="links ">
        <p className="footer-heading">Company</p>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/tours">Tours</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </ul>

      </div>
      <div className="links">
        <p className="footer-heading">Legal</p>
        <ul>
          <Link href="/">Privacy Policy</Link>
          <Link href="/tours">Terms and conditions</Link>
        </ul>

      </div>
    </div>
  )
}
