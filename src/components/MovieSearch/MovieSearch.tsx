import { useContext } from "react";
import Button from "../Button/Button";
import MovieSearchList from "../MovieSearchList/MovieSearchList";
import FiltersButtons from "../FiltersButtons/FiltersButtons";
import MovieSearchQForm from "../MovieSearchForm/MovieSearchQForm";
import Header from "../Header/Header"
import { MoviesContext } from "../../context/MoviesContext";
import styles from './MovieSearch.module.scss'

const MovieSearch = () => {

  const context = useContext(MoviesContext)
  if(context === undefined) {throw new Error('Context invalid')}

  const {
    isDarkMode,
    handleDiscover,
  } = context

  const DiscoverButton = () => {
    return <Button
      variant='basic'
      onClick={handleDiscover}
    >
      Search discover
    </Button>
  }

  return (
      <div className={`${styles.SearchMovies} ${isDarkMode ? '' : 'white'}`}>
        <Header />
        <MovieSearchQForm />
        <DiscoverButton />
        <FiltersButtons />
        <MovieSearchList />
      </div>
  )
}
export default MovieSearch