import Image from 'next/image';
import facebook from '../public/facebook-square-brands.svg'
import instagram from '../public/instagram-brands.svg'

export default function Footer() {
    return (

        <footer>

                <div className={"footer-social"}>
                    <a href="https://www.facebook.com/wlclandscapes/" target="_blank" rel="noreferrer">
                        <Image src={facebook} alt="Facebook" width={40} height={40} />
                    </a>
                    <a href="https://www.instagram.com/wlclandscapes/" target="_blank" rel="noreferrer">
                        <Image src={instagram} alt="Instagram" width={40} height={40} />
                    </a>
                </div>
    
                <div className={"footer-contact"}>
                    <a href="mailto:wlclandscapes@gmail.com">
                        <p>wlclandscapes@gmail.com</p> 
                    </a>
    
                    <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                     
                        <p><a href="tel:0419502546">0419 502 546</a></p>
                    
                </div>
    
                <p>ABN 87 405 282 344</p>
                  
                    <p><a href="https://roo.digital" target="_blank" rel="noreferrer">  Powered by RooDigital</a></p>
                

        </footer>

    )
}