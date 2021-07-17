import Head from "next/head";

import Header from "../components/header";
import Hero from "../public/hero-01.jpg";
import ServiceOverview from "../components/service-overview";
import Gallery from "../components/gallery";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";

import ServiceDecking from "../public/service-decking-01.jpg";
import ServiceLandscaping from "../public/service-landscaping-01.jpg";
import ServicePaving from "../public/service-paving-01.jpg";
import ServicePoolFencing from "../public/service-pool-fencing-01.jpg";

export default function Decking() {

    const images = [ServiceDecking, ServiceLandscaping, ServicePaving, ServicePoolFencing];
    

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