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
        <title>WLC Landscapes Melbourne - Landscaping</title>
        <meta
          property="og:title"
          content="WLC Landscapes Melbourne"
          key="title"
        />
        <meta
          name="description"
          content="Experienced landscapers with a proud history of delivering construction and design landscaping projects."
        />
        <meta
          property="og:description"
          content="Experienced landscapers with a proud history of delivering construction and design landscaping projects."
        />
        <meta property="og:image" content={Hero.src} />
      </Head>

      <Header bg={Hero} title={"Landscaping"} />

      <main>
        <ServiceOverview
          serviceOverview={[
            `Your garden is an extension of your home. It is a space to enjoy entertaining or simply relaxing.`,

            `Whitaker Landscape Constructions can work with you to create a garden that is functional, beautiful and suits your needs.`,

            `We pride ourselves on transforming tired gardens into wonderful spaces that complement the natural surroundings of your property.`
          ]}
          serviceIncludes={[
            "Hard landscapes",
            "Soft landscapes",
            "Landscape construction",
            "Landscape design",
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
