import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Cards.module.css";

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
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-right" className={styles.arrow} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path>
                    </svg>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </section>
  );
}
