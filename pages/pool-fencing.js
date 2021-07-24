import Head from "next/head";

import Header from "../components/header";
import Hero from "../public/hero-02.jpg";
import ServiceOverview from "../components/service-overview";
import Gallery from "../components/gallery";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";

import ServicePoolFencing1 from "../public/service-pool-fencing-01.jpg";
import ServicePoolFencing2 from "../public/service-pool-fencing-02.jpg";
import ServicePoolFencing3 from "../public/service-pool-fencing-03.jpg";
import ServicePoolFencing4 from "../public/service-pool-fencing-04.jpg";
import ServicePoolFencing5 from "../public/service-pool-fencing-05.jpg";
import ServicePoolFencing6 from "../public/service-pool-fencing-06.jpg";

export default function PoolFencing() {

    const images = [
        ServicePoolFencing1, 
        ServicePoolFencing2, 
        ServicePoolFencing3, 
        ServicePoolFencing4, 
        ServicePoolFencing5, 
        ServicePoolFencing6, 
    ];
    

    return (
        <div className={"container"}>

            <Head>
                <title>WLC Landscapes</title>
                <meta name="description" content="Melbourne Paving" />
            </Head>

            <Header bg={ Hero } title={"Pool fencing"} />

            <main>

                <ServiceOverview 
                    serviceOverview={`We help by transforming your pool areas into safe, stylish, architectually designed outdoor living spacves. \n Pool fencing is absolutely essential for any swimming pool installation. Pool fencing in Australia is statutory and a legal requirement. Every Aussie pool must now be properly protected. \n We specialise in frameless, semi-frameless, and framed designs. What makes glass fencing so unique is not just its minimal design, but it's ability to secure the prmise without impacting the view.`} 
                    serviceIncludes={
                        [
                            "Frameless glass pool fencing", 
                            "Semi-frameless glass pool fencing"
                        ]
                    }
                />

                <Gallery images={images}/>

                <h2 id={"contact"} className={"sub-heading"}>Request a free quote</h2>

                <ContactForm />

            </main>
            
            <Footer />

        </div>
    );

}