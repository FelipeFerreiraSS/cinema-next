import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

  export default function Home(props) {
    const [searchText, setSearchText] = useState('')
    const [movieList, setMovieList] = useState([])

    const handleSearch = async () => { 
      if(searchText !== '') {
        const result = await fetch(`http://localhost:3000/api/search?query=${searchText}`)
        const json = await result.json()
        setMovieList(json.list)
      }
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Cinema Next JS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Busca
        </h1>

        <input type="text" value={searchText} onChange={e=>setSearchText(e.target.value)} />
        <button onClick={handleSearch}>Buscar</button>

        <hr/>

        <ul>
          {movieList.map(item=>(
            <li>
            <a href={`movie/${item.id}`}>
              <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150" alt="" /> <br/>
              <p>{item.title}</p>
            </a>
          </li>
          ))}
        </ul>

      </main>
    </div>
  )
}
