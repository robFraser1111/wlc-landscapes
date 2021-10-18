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
import ServiceDecking from "../public/service-decking-02.jpg";
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
      heading: "Melbourne based",
      description: `Whitaker Landscape Constructions is a Melbourne based family business dedicated to creating beautiful gardens and outdoor living spaces.\n\nWith over 18 years' experience, we work closely with our clients to turn your ideas, dreams and inspirations into stunning outdoor living areas.\n\nWe listen to your ideas and consider factors such as lifestyle, space and budget during our consultation and quoting process. We pride ourselves on the relationship we build with our clients.`,
      image: Quotes,
      link: `tel:0419502546`,
      target: ``
    },
    {
      heading: "Areas we service",
      description: `Based in Melbourne’s south eastern suburbs, we service all parts of greater Melbourne. We understand that sometimes it is difficult for our clients to be available during the day.\n\nWe provide onsite quote visits after hours and on the weekend Contact us for a free quote`,
      image: Map,
      link: `https://www.google.com/maps/place/South+Eastern+Suburbs,+VIC/@-38.0238179,145.0373068,10z/data=!3m1!4b1!4m5!3m4!1s0x6ad61a0905dd4991:0xdf0deff7beae814!8m2!3d-38.0471084!4d145.2701235`,
      target: `_blank`
    },
    // {
    //   heading: "After hours and weekend work",
    //   description: `We get that you need to work (we do too), and as most of us work 9-5. If we needed to access a tradesperson we would require they can come by after hours, so why should you be any different? Therefore we can work with you by providing free quotes and project work, out of hours and over the weekend where required.`,
    //   image: Car,
    // },
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

        <meta name="google-site-verification" content="1ebYp9xWsqaACORX7j8kQz1B5y1lnAbrQmDaXv7gPkQ" />
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

        {/* Work around so component renders only on the client side */}
        <div uppressHydrationWarning={true}>
          {process.browser && <FacebookFeed />}
        </div>

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
