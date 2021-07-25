import Head from "next/head";

import Header from "../components/header";
import Cards from "../components/cards";
import WhyUs from "../components/why-us";
import FacebookFeed from "../components/facebook-feed";
import ImageText from "../components/image-text";
import Testimonials from "../components/testimonials";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";

import Hero from "../public/hero-02.jpg";
import ServiceDecking from "../public/service-decking-01.jpg";
import ServicePaving from "../public/service-paving-01.jpg";
import ServiceFencing from "../public/service-pool-fencing-01.jpg";
import ServiceLandscaping from "../public/service-landscaping-01.jpg";
import Quotes from "../public/quotes-your-way-01.png";
import Map from "../public/noble-park-01.jpg";
import Car from "../public/wlc-01.jpg";

export default function Home() {
  const services = [
    {
      image: ServiceDecking,
      title: "Decking",
      description:
        "A wide range of timber and composite decking services available.",
      cta: "Find out more",
      link: "/decking",
    },
    {
      image: ServicePaving,
      title: "Paving",
      description: "We cater for all of your paving and concreteing needs.",
      cta: "Find out more",
      link: "/paving",
    },
    {
      image: ServiceFencing,
      title: "Pool fencing",
      description:
        "Specialists in installation of frameless and semi-frameless glass pool fencing.",
      cta: "Find out more",
      link: "/pool-fencing",
    },
    {
      image: ServiceLandscaping,
      title: "Landscaping",
      description:
        "Experienced landscapers with a proud history of delivering construction and design landscaping projects",
      cta: "Find out more",
      link: "/landscaping",
    },
  ];

  const aboutUs = [
    {
      heading: "Get quotes your way",
      description: `Whitaker Landscape Constructions understands that calling a tradesperson is often the last thing you want to do. That's why we make it so you don't have to. Contact us via email, facebook messenger, Instagram DMs or text. We write back quickly.\n\nWe are also more than happy to do things the old fashioned way and talk on the phone should you so wish.`,
      image: Quotes,
    },
    {
      heading: "Travel is not an issue",
      description: `Based in Noble Park, the heart of Melbourne South Eastern suburbs, we undertake most of our projects in this part of the world. However, we have also undertaken a significant amount of projects in Bayside and Mornington Peninsula and are willing to travel, so if you are within Greater Melbourne, chances are we have been there and are willing to go there again.`,
      image: Map,
    },
    {
      heading: "After hours and weekend work",
      description: `We get that you need to work (we do too), and as most of us work 9-5. If we needed to access a tradesperson we would require they can come by after hours, so why should you be any different? Therefore we can work with you by providing free quotes and project work, out of hours and over the weekend where required.`,
      image: Car,
    },
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
          content="Experienced landscapers with a proud history of delivering construction and design landscaping projects."
        />
        <meta
          property="og:description"
          content="Experienced landscapers with a proud history of delivering construction and design landscaping projects."
        />
        <meta property="og:image" content={Hero.src} />
      </Head>

      <Header
        bg={Hero}
        title={
          "Landscapers servicing the Eastern and Bayside suburbs of Melbourne"
        }
        ctaText={"Get your free quote"}
        ctaLink={"#contact"}
      />

      <main>
        <div id="fb-root"></div>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v11.0"
          nonce="dCURxFbR"
        ></script>

        <h2 id={"services"} className={"sub-heading"}>
          Services
        </h2>

        <Cards services={services} />

        <h2 id={"why"} className={"sub-heading"}>
          Why us?
        </h2>

        <WhyUs />

        <h2 id={"recent"} className={"sub-heading"}>
          Recent work
        </h2>

        <FacebookFeed />

        <h2 id={"about"} className={"sub-heading"}>
          About us
        </h2>

        <ImageText rows={aboutUs} />

        <h2 id={"testimonials"} className={"sub-heading"}>
          Testimonials
        </h2>

        <Testimonials />

        <h2 id={"contact"} className={"sub-heading"}>
          Request a free quote
        </h2>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
