import Head from "next/head";

import Header from "../components/header";
import Hero from "../public/hero-02.jpg";
import ServiceOverview from "../components/service-overview";
import Gallery from "../components/gallery";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";

import ServiceDecking1 from "../public/service-decking-01.jpg";
import ServiceDecking2 from "../public/service-decking-02.jpg";
import ServiceDecking3 from "../public/service-decking-03.jpg";
import ServiceDecking4 from "../public/service-decking-04.jpg";
import ServiceDecking5 from "../public/service-decking-05.jpg";
import ServiceDecking6 from "../public/service-decking-06.jpg";

export default function Decking() {

    const images = [
        ServiceDecking1, 
        ServiceDecking2, 
        ServiceDecking3, 
        ServiceDecking4, 
        ServiceDecking5, 
        ServiceDecking6
    ];
    

    return (
        <div className={"container"}>

            <Head>
                <title>WLC Landscapes</title>
                <meta name="description" content="Melbourne Landscaping" />
            </Head>

            <Header bg={ Hero } title={"Decking"} />

            <main>

                <ServiceOverview 
                    serviceOverview={`We design and construct quality composite decking, timber decking and pergolas. We can help you decide on the best decking material and design for your space. \n We are experienced in building or installing a wide range of different types of decks that will perfectly fir your property and tastes. We will design your deck taking into consideration your land, budget and lifestyle requirements, and we dedicate ourselves to providing top quality craftmanship.`} 
                    serviceIncludes={["Pool decking", "Composite decking", "Timber decking", "Pergola building", "Feature fencing and screening"]}
                />

                <Gallery images={images}/>

                {/* <h2 id={"contact"} className={"sub-heading"}>Request a free quote</h2>

                <ContactForm /> */}

            </main>
            
            <Footer />

        </div>
    );

}