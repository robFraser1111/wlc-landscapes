import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WLC Landscapes</title>
        <meta name="description" content="Melbourne Landscaping" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          WLC Landscapes
        </h1>

        <p className={styles.description}>
          Website coming soon
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://roo.digital"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by RooDigital
        </a>
      </footer>
    </div>
  )
}
