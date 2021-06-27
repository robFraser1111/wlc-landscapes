import Menu from "../components/menu";

export default function Header(props) {
    return (

        <header style={{ backgroundImage: `url(${props.bg.src})`, backgroundSize: 'cover' }}>

            <Menu />

            <section>

                <h1>
                    { props.title }
                </h1>

                { props.ctaText
                ?   <a href={ props.ctaLink }>
                        <button>
                            <p>{ props.ctaText }</p>
                        </button>
                    </a>
                :   null
                }

            </section>
            
        </header>

    )
}