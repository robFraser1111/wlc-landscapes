import Link from 'next/link'

export default function Menu() {
    return (

        <nav>
            <Link href="/">
                <a>
                    <img src="#" alt="WLC Logo" />
                </a>
            </Link>

            <ul>
                <li>Services</li>
                <li>Why us?</li>
                <li>Recent work</li>
                <li>About</li>
                <li>Email</li>
                <li>Call</li>
            </ul>

        </nav>

    )
}