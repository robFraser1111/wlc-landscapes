import Image from 'next/image'
import Link from 'next/link'

import Logo from '../public/wlc-logo-02.png'
import Email from '../public/envelope-solid.svg'
import Phone from '../public/phone-alt-solid.svg'

export default function Menu() {
    return (

        <nav>
            <Link href="/">
                <a>
                    <Image src={Logo} alt="Logo" width={152} height={156} />
                </a>
            </Link>

            <ul>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#why">Why us?</a>
                </li>
                <li>
                    <a href="#recent">Recent work</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href="mailto:wlclandscapes@gmail.com">
                        <Image src={Email} alt="Email" width={30} height={30} />
                    </a>
                </li>
                <li>
                    <a href="tel:0419502546">
                        <Image src={Phone} alt="Phone" width={30} height={30} />
                    </a>
                </li>
            </ul>

        </nav>

    )
}