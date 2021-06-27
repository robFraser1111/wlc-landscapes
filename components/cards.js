import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Cards.module.css";
import Arrow from "../public/long-arrow-alt-right-solid.svg";

export default function Cards(props) {
  return (
    <section className={styles.cards}>
      {props.services.map((service) => (
        <div className={styles.card} key={service.title}>
          <Link href={service.link}>
            <a>
              <Image src={service.image} />
              <div className={styles.text}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className={styles.cta}>
                  <h6>{service.cta}</h6>
                  <Image src={Arrow} alt="Arrow" width={50} height={30} />
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </section>
  );
}
