import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react";

import Logo from '../public/wlc-logo-02.png'
import Email from '../public/envelope-solid.svg'
import Phone from '../public/phone-alt-solid.svg'
import Bars from '../public/bars-solid.svg'

import styles from "../styles/Menu.module.css";

export default function Menu() {
    return (

        <nav className={styles.navigation}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>
                        <Image src={Logo} alt="Logo" width={152} height={156} />
                    </a>
                </Link>
            </div>

            <div className={styles.mobile}>
                <Image src={Bars} alt="Menu" width={60} height={60} />
            </div>

            <ul>
                <li className={styles.navItem}>
                    <a href="#services">Services</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#why">Why us?</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#recent">Recent work</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#about">About</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#contact">Contact</a>
                </li>
                <li className={`${styles.email} ${styles.navItem}`}>
                    <a href="mailto:wlclandscapes@gmail.com">
                        <Image src={Email} alt="Email" width={30} height={30} />
                    </a>
                </li>
                <li className={`${styles.phone} ${styles.navItem}`}>
                    <a href="tel:0419502546">
                        <Image src={Phone} alt="Phone" width={30} height={30} />
                    </a>
                </li>
            </ul>

        </nav>

    )
}