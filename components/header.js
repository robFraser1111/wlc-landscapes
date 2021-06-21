import Menu from "../components/menu";

export default function Header(props) {
    return (

        <header style={{ backgroundImage: `url(${props.bg.src})`, backgroundSize: 'cover' }}>

            <Menu />

            <section>
                <h1>
                Landscapers servicing the Eastern and Bayside suburbs of Melbourne
                </h1>

                <button>
                <h2>Get your free quote</h2>
                </button>
            </section>
            
        </header>

    )
}