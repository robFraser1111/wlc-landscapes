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
                            <h3>{ props.ctaText }</h3>
                        </button>
                    </a>
                :   null
                }

            </section>
            
        </header>

    )
}