import Link from 'next/link'

export default function Custom404() {
    return (
        <div className={"custom404"}>
            <h4>404 - Page Not Found</h4>
            <Link href="/">
                <a><u>Return home</u></a>
            </Link>
        </div>
    )
  }