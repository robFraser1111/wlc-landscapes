import Menu from "../components/menu";
import styles from "../styles/Header.module.css";

export default function Header(props) {
    return (

        <header style={{ backgroundImage: `url(${props.bg.src})`, backgroundSize: 'cover' }}>

            <Menu />

            <section className={styles.header}>

                <h1>
                    { props.title }
                </h1>

                { props.ctaText
                ?   <div className={styles.cta}>
                      <a href={ props.ctaLink }>
                            <button>
                                <p>{ props.ctaText }</p>
                            </button>
                        </a>
                   </div>
                :   null
                }

            </section>
            
        </header>

    )
}