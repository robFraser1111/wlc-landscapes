import Link from 'next/link'
import styles from "../styles/Cards.module.css";

export default function Cards(props) {
    return (

        <section className={styles.cards}>
            {props.services.map((service) => (
                <div className={styles.card} key={ service.title }>
                    <img src={ service.image.src }  />
                    <div className={styles.text}>
                        <h5>{ service.title }</h5>
                        <p>{ service.description }</p>
                        <Link href={ service.link }>
                            <a>{ service.cta }</a>
                        </Link>
                    </div>
                </div>
            ))}
        </section>

    )
}




