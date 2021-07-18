import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../public/wlc-logo-02.png";
import Email from "../public/envelope-solid.svg";
import Phone from "../public/phone-alt-solid.svg";
import Bars from "../public/bars-solid.svg";

import styles from "../styles/Menu.module.css";

export default function Menu() {
  // Toggle the mobile menu visibity when called
  let [mobileMenu, toggleMobileMenu] = useState(false);

  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <a href={"/"}>
          <Image src={Logo} alt="Logo" width={152} height={156} priority={true} />
        </a>
      </div>

      <div className={styles.mobile}>
        <button onClick={() => toggleMobileMenu(!mobileMenu)}>
          <div className={`${styles.bars} ${mobileMenu ? styles.clicked : null}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <ul className={mobileMenu ? styles.show : styles.hide}>
        <li className={styles.navItem}>
          <a className={styles.underline} href={"/" + "#services"} onClick={() => toggleMobileMenu(false)}>
            Services
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.underline} href={"/" + "#why"} onClick={() => toggleMobileMenu(false)}>
            Why us?
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.underline} href={"/" + "#recent"} onClick={() => toggleMobileMenu(false)}>
            Recent work
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.underline} href={"/" + "#about"} onClick={() => toggleMobileMenu(false)}>
            About
          </a>
        </li>
        {/* <li className={styles.navItem}>
          <a className={styles.underline} href="#contact" onClick={() => toggleMobileMenu(false)}>
            Contact
          </a>
        </li> */}
        <li className={`${styles.email} ${styles.navItem}`}>
          <a className={styles.hover} href="mailto:wlclandscapes@gmail.com">
            <Image src={Email} alt="Email" width={30} height={30} priority={true} />
          </a>
        </li>
        <li className={`${styles.phone} ${styles.navItem}`}>
          <a className={styles.hover} href="tel:0419502546">
            <Image src={Phone} alt="Phone" width={30} height={30} priority={true} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
