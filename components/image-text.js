import Image from 'next/image'
import styles from "../styles/ImageText.module.css"

export default function ImageText(props) {
    return (

        <section className={styles.imageText}>

            {props.rows.map((row) => (
             
                <div className={styles.items} key={ row.heading }>
                    <div>
                        <a href={ row.link } target={ row.target }><Image src={ row.image } alt={ row.heading }/></a>
                    </div>
                    <div className={styles.text}>
                        <h3>{ row.heading }</h3>
                        <p>{ row.description }</p>
                    </div>
                </div>

            ))}
            
        </section>

    )
}
