import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PayByBit - Pay Small Small</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://paybybit.netlify.app">PayByBit!</a>
        </h1>

        <p className={styles.description}>
					Pay Small Small
        </p>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
