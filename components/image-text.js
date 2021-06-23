import Image from 'next/image'
import styles from "../styles/ImageText.module.css"

export default function ImageText(props) {
    return (

        <section className={styles.imageText}>

            {props.rows.map((row) => (
             
                <div className={styles.items} key={ row.heading }>
                    <div>
                        <Image src={ row.image } alt={ row.heading }/>
                    </div>
                    <div className={styles.text}>
                        <h4>{ row.heading }</h4>
                        <p>{ row.description }</p>
                    </div>
                </div>

            ))}
            
        </section>

    )
}
