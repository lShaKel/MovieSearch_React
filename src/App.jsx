import MovieSearch from "./components/MovieSearch.jsx";
import {MoviesProvider} from "./context/MoviesContext.jsx";

const App = () => {

  return (
    <MoviesProvider>
      <MovieSearch/>
    </MoviesProvider>
  )
}

export default App
