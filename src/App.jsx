import './App.css'

import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {

  // https://www.omdbapi.com/?apikey=79ff1ca3&s=avengers
  //API-Key: 79ff1ca3
  const {movies}=useMovies()

  return (
    <div className='page'>
      <h1>Buscador de Películas</h1>
      <header>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix...' />
          <button type="submit">Buscar</button>
        </form>
      </header>


    <main>
      <Movies movies={movies}/>
    </main>
    </div>
  )
}

export default App
