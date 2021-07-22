import Head from "next/head";

import Header from "../components/header";
import Hero from "../public/hero-02.jpg";
import ServiceOverview from "../components/service-overview";
import Gallery from "../components/gallery";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";

import ServiceLandscaping1 from "../public/service-landscaping-01.jpg";
import ServiceLandscaping2 from "../public/service-landscaping-02.jpg";
import ServiceLandscaping3 from "../public/service-landscaping-03.jpg";
import ServiceLandscaping4 from "../public/service-landscaping-04.jpg";
import ServiceLandscaping5 from "../public/service-landscaping-05.jpg";
import ServiceLandscaping6 from "../public/service-landscaping-06.jpg";

export default function Landscaping() {

    const images = [
        ServiceLandscaping1, 
        ServiceLandscaping2, 
        ServiceLandscaping3, 
        ServiceLandscaping4, 
        ServiceLandscaping5, 
        ServiceLandscaping6, 
    ];
    

    return (
        <div className={"container"}>

            <Head>
                <title>WLC Landscapes</title>
                <meta name="description" content="Melbourne Paving" />
            </Head>

            <Header bg={ Hero } title={"Landscaping"} />

            <main>

                <ServiceOverview 
                    serviceOverview={`Your garden should be a space that you will love spending time in. We want that to be true for you. WLC will make sure that your garden is functional and timeless. \n We pride ourselves on transforming previously medicore spaces into magnificent pieces of art that reveal the beautiful nature of the area. With a selection of services that include design, brick work, landscaping, patio installation, water features, pots, paving, mature tree relocation, retaining walls - if it's in your garden we can do it!`} 
                    serviceIncludes={
                        [
                            "Hard landscapes",
                            "Soft landscapes",
                            "Landscape construction",
                            "Landscape design"
                        ]
                    }
                />

                <Gallery images={images}/>

                {/* <h2 id={"contact"} className={"sub-heading"}>Request a free quote</h2>

                <ContactForm /> */}

            </main>
            
            <Footer />

        </div>
    );

}