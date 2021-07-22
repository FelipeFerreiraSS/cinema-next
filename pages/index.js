import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

  export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cinema Next JS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Filmes em destaque
        </h1>

        <Link href="/busca">Ir para busca</Link>

        <ul>
          {props.list.map(item=>(
            <li>
              <a href={`movie/${item.id}`}>
                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150" alt="" /> <br/>
                <p>{item.title}</p>
              </a>
            </li>
          ))}
        </ul>

        <Link href="/sobre">Sobre o projeto</Link>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/trending')
  .then(res => res.json())

  return {
    props: {
      list: res.list
    }
  }
}
