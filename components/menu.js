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
        <Link href={process.env.homePage}>
          <a>
            <Image src={Logo} alt="Logo" width={152} height={156} />
          </a>
        </Link>
      </div>

      <div className={styles.mobile}>
        <button onClick={() => toggleMobileMenu(!mobileMenu)}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
            </path>
          </svg>
        </button>
      </div>

      <ul className={mobileMenu ? styles.show : styles.hide}>
        <li className={styles.navItem}>
          <a className={styles.underline} href={process.env.homePage + "#services"} onClick={() => toggleMobileMenu(false)}>
            Services
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.underline} href={process.env.homePage + "#why"} onClick={() => toggleMobileMenu(false)}>
            Why us?
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.underline} href={process.env.homePage + "#recent"} onClick={() => toggleMobileMenu(false)}>
            Recent work
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.underline} href={process.env.homePage + "#about"} onClick={() => toggleMobileMenu(false)}>
            About
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.underline} href="#contact" onClick={() => toggleMobileMenu(false)}>
            Contact
          </a>
        </li>
        <li className={`${styles.email} ${styles.navItem}`}>
          <a className={styles.hover} href="mailto:wlclandscapes@gmail.com">
            <Image src={Email} alt="Email" width={30} height={30} />
          </a>
        </li>
        <li className={`${styles.phone} ${styles.navItem}`}>
          <a className={styles.hover} href="tel:0419502546">
            <Image src={Phone} alt="Phone" width={30} height={30} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
