import Image from 'next/image'

import styles from "../styles/Icons.module.css";

import Certificate from "../public/certificate-solid.svg";
import Arrows from "../public/exchange-alt-solid.svg";
import Hands from "../public/hands-helping-solid.svg";


export default function WhyUs() {
    return (

        <section className={styles.icons}>

            <div className={styles.icon}>
                <Image src={Certificate} width={200} height={200}/>
                <div className={styles.text}>
                    <h4>Certified</h4>
                    <p>Fully registered builder<br />and qualified landscaper Cert. 3.</p> 
                </div>
            </div>

            <div className={styles.icon}>
                <Image src={Arrows} width={200} height={200}/>
                <div className={styles.text}>
                    <h4>Adaptable</h4>
                    <p>Domestic, commercial and industrial.<br />No job is too big or too small.</p>
                </div> 
            </div>

            <div className={styles.icon}>
                <Image src={Hands} width={200} height={200}/>
                <div className={styles.text}>
                    <h4>Reliable</h4>
                    <p>More than 18 years experience.<br />Prompt, reliable, efficient and clean.</p>
                </div> 
            </div>

        </section>

    )
}
