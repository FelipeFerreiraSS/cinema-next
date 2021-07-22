import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

  export default function MovieItem({info}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cinema Next JS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {info.title}
        </h1>

        <p>Nota: {info.vote_average}</p>

        <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} width="550" alt="" />

        <p>{info.overview}</p>

        <Link href="/busca">Voltar para busca</Link>

      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/movie/${context.params.id}`)
  const json = await res.json()

  return {
    props: {
      info: json.info
    }
  }
}
