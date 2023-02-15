import Head from "next/head";

import Header from "../components/header";
import Hero from "../public/hero-02.jpg";
import ServiceOverview from "../components/service-overview";
import Gallery from "../components/gallery";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";

// import ServiceDecking1 from "../public/service-decking-01.jpg";
import ServiceDecking2 from "../public/service-decking-02.jpg";
import ServiceDecking3 from "../public/service-decking-03.jpg";
import ServiceDecking4 from "../public/service-decking-04.jpg";
import ServiceDecking5 from "../public/service-decking-05.jpg";
import ServiceDecking6 from "../public/service-decking-06.jpg";

export default function Decking() {
  const images = [
    // ServiceDecking1,
    ServiceDecking2,
    ServiceDecking3,
    ServiceDecking4,
    ServiceDecking5,
    ServiceDecking6,
  ];

  return (
    <div className={"container"}>
      <Head>
        <title>WLC Landscapes Melbourne - Decking</title>
        <meta
          property="og:title"
          content="WLC Landscapes Melbourne"
          key="title"
        />
        <meta
          name="description"
          content="A wide range of timber and composite decking services available."
        />
        <meta
          property="og:description"
          content="A wide range of timber and composite decking services available."
        />
        <meta property="og:image" content={Hero.src} />
      </Head>

      <Header bg={Hero} title={"Decking"} />

      <main>
        <ServiceOverview
          serviceOverview={[
            `We can design and build the perfect deck for your home. We will work   with you through this process, considering the functional needs, your style, the most
            appropriate material, existing property surroundings and your budget.`,
            
            `Using high quality modern decking materials, we can construct an outdoor
            entertaining space that becomes an extension of your indoor living.
            We can also build decking areas around your pool, transforming your pool area
            into an oasis to enjoy during our balmy Australian summers.`,

            `We also build decks and outdoor spaces designed by you or your architect.`
          ]}
          serviceIncludes={[
            "Pool decking",
            "Composite decking",
            "Timber decking",
            "Pergola building",
            "Feature fencing and screening",
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
