import { useContext } from "react";
import Button from "./Button/Button";
import MovieSearchList from "./MovieSearchList/MovieSearchList";
import FiltersButtons from "./FiltersButtons/FiltersButtons";
import MovieSearchQForm from "./MovieSearchForm/MovieSearchQForm";
import Header from "./Header/Header"
import { MoviesContext } from "../context/MoviesContext";

const MovieSearch = () => {

  const context = useContext(MoviesContext)
  if(context === undefined) {throw new Error('Context invalid')}

  const {
    isDarkMode,
    handleDiscover,
    themeChange,
  } = context

  const DiscoverButton = () => {
    return <Button
      variant='discover'
      onClick={handleDiscover}
    >
      Search discover
    </Button>
  }

  const ThemeButton = () => {
    return <Button
      variant='theme'
      onClick={themeChange}
    >
      Change theme
    </Button>
  }

  return (
      <div className={`SearchMovies ${isDarkMode ? '' : 'white'}`}>
        <Header />
        <MovieSearchQForm />
        <DiscoverButton />
        <FiltersButtons />
        <MovieSearchList />
        <ThemeButton />
      </div>
  )
}
export default MovieSearch