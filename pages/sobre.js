import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

  export default function Sobre(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cinema Next JS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sobre 
        </h1>
        <p>Projeto criado por {props.author}</p>

        <Link href="/">Voltar para a Home</Link>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      author: 'Felipe Ferreira',
    }
  }
}
