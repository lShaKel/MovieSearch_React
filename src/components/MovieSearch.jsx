import { useContext } from "react";
import Button from "./Button/Button.jsx";
import MovieSearchList from "./MovieSearchList/MovieSearchList.jsx";
import FiltersButtons from "./FiltersButtons/FiltersButtons.jsx";
import MovieSearchQForm from "./MovieSearchForm/MovieSearchQForm.jsx";
import Header from "./Header/Header.jsx"
import { MoviesContext } from "../context/MoviesContext.jsx";

const MovieSearch = () => {
  const {
    isDarkMode,
    handleDiscover,
    themeChange,
  } = useContext(MoviesContext)

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