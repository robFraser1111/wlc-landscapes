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
        <title>WLC Landscapes Melbourne</title>
        <meta
          property="og:title"
          content="WLC Landscapes Melbourne"
          key="title"
        />
        <meta
          name="description"
          content="Specialists in installation of frameless and semi-frameless glass pool fencing."
        />
        <meta
          property="og:description"
          content="Specialists in installation of frameless and semi-frameless glass pool fencing."
        />
        <meta property="og:image" content={Hero.src} />
      </Head>

      <Header bg={Hero} title={"Pool fencing"} />

      <main>
        <ServiceOverview
          serviceOverview={
            [`We create stylish, functional and safe poolside living spaces, creating a pool area for you to enjoy for years to come. We specialise in frameless and semi-frameless designed pool fences.`,
            `Our pool fences are sleek, modern and ensure pool views are not obstructed. The materials and finishes can be tailored to suit your landscape surrounds. All swimming pools in Australia are required by law to be safely fenced and comply with current Victorian regulations and Australian standards. We can ensure your pool fence is compliant.`]
          }
          serviceIncludes={[
            "Frameless glass pool fencing",
            "Semi-frameless glass pool fencing",
          ]}
        />

        <Gallery images={images} />

        <h2 id={"contact"} className={"sub-heading"}>
          Request a free quote
        </h2>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
