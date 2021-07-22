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
        <p>Todo projeto foi criado com base em uma API do site <a href="https://www.themoviedb.org/">TMDB</a> </p>
    
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt="" />

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
