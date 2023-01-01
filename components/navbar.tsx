
import Link from "next/link";
import $ from 'jquery';
import React, { useState} from 'react';

export default function Navbar() {

  const [openMenu, setOpenMenu] = useState(false);

  const linkSelected = (link) => {
    $('#navbar a').removeClass('selected');
    $(link.target).addClass('selected');
    onHamburgerClick();
    $('#check').prop('checked', false);
  };

  const onHamburgerClick = () => {
    let isOpen = !openMenu
    setOpenMenu(!openMenu)
    console.log('openMenu', openMenu)
    if (!openMenu) {
      $('.mobi-links').css('top','80px');
    }
    else {
      $('.mobi-links').css('top','-100vh');
    }
  }
  return (
    <div id="navbar" className="bg-white dark:bg-black">
      <div id="navbar-inner">
        <Link className="logo-link" href="/"><img className="logo" src="/thecptlocal3.png" /></Link>
        <div className="links">
          <ul>
            <li><Link href="/" onClick={linkSelected}>Home</Link></li>
            <li><Link href="/tours" onClick={linkSelected}>Tours</Link></li>
            <li><Link href="/services" onClick={linkSelected}>Services</Link></li>
            <li><Link href="/about" onClick={linkSelected}>About</Link></li>
            <li><Link href="/contact" onClick={linkSelected}>Contact</Link></li>
          </ul>
        </div>
        <div className="hamburger-container">
          <label htmlFor="check">
           <input type="checkbox" id="check" onClick={onHamburgerClick}/>
           <span></span>
           <span></span>
           <span></span>
         </label>
        </div>
      </div>
      <div className="mobi-links">
        <ul>
          <li><Link href="/" onClick={linkSelected}>Home</Link></li>
          <li><Link href="/tours" onClick={linkSelected}>Tours</Link></li>
          <li><Link href="/services" onClick={linkSelected}>Services</Link></li>
          <li><Link href="/about" onClick={linkSelected}>About</Link></li>
          <li><Link href="/contact" onClick={linkSelected}>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}
