import Link from 'next/link'

export default function Custom500() {
    return (
        <div className={"custom500"}>
            <h4>500 - Server-side error occurred</h4>
            <Link href="mailto:wlclandscapes@gmail.com">
                    Contact us at <a><u>wlclandscapes@gmail.com</u></a>
            </Link>
        </div>
        )
  }