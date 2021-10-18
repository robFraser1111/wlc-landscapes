import Head from "next/head";

import Header from "../components/header";
import Hero from "../public/hero-02.jpg";
import ServiceOverview from "../components/service-overview";
import Gallery from "../components/gallery";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";

import ServicePaving1 from "../public/service-paving-01.jpg";
import ServicePaving2 from "../public/service-paving-02.jpg";
import ServicePaving3 from "../public/service-paving-03.jpg";
import ServicePaving4 from "../public/service-paving-04.jpg";
import ServicePaving5 from "../public/service-paving-05.jpg";
import ServicePaving6 from "../public/service-paving-06.jpg";

export default function Paving() {
  const images = [
    ServicePaving1,
    ServicePaving2,
    ServicePaving3,
    ServicePaving4,
    ServicePaving5,
    ServicePaving6,
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
          content="We cater for all of your paving and concreteing needs."
        />
        <meta
          property="og:description"
          content="We cater for all of your paving and concreteing needs."
        />
        <meta property="og:image" content={Hero.src} />
      </Head>

      <Header bg={Hero} title={"Paving"} />

      <main>
        <ServiceOverview
          serviceOverview={[
            `We can install all types of paving around your garden and outdoor living areas, including poolside paving, patios, entertainment areas, driveways, paths, and garden areas, to name a few.`,
          
            `We pride ourselves on providing the best advice on paving selection and professional installation. With high quality materials and excellent workmanship we will create the outdoor space you desire.`
          ]}
          serviceIncludes={[
            "Pool areas",
            "Patios",
            "Driveways",
            "Paths",
            "Garden edges",
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
