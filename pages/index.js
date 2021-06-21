import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";
import Hero from "../public/hero-01.jpg";

export default function Home() {
  return (
    <div className={"container"}>
      <Head>
        <title>WLC Landscapes</title>
        <meta name="description" content="Melbourne Landscaping" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header bg={ Hero } />

      <main>
        <section>Main Content</section>
      </main>

      <Footer />
    </div>
  );
}
