import './App.css'

import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

// import { useRef } from 'react' // valor que persiste entre render

function App () {
  // https://www.omdbapi.com/?apikey=79ff1ca3&s=avengers
  // API-Key: 79ff1ca3
  const { movies } = useMovies()
  // const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const { query } = Object.fromEntries(new window.FormData(event.target))
    console.log(query)
  }

  return (
    <div className='page'>
      <h1>Buscador de Películas</h1>
      <header>
        <form className='form' onSubmit={handleSubmit}>
          <input name='query' placeholder='Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
