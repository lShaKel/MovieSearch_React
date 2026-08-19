import {memo, useMemo, useContext} from "react";
import { MoviesContext } from "../../context/MoviesContext";
import MovieSearchItem from "../MovieSearchItem/MovieSearchItem";
import styles from './MovieSearchList.module.scss'

const MovieSearchList = () => {

  const context = useContext(MoviesContext)
  if(context === undefined) {throw new Error('Context is wrong')}
  const {
    movies = [],
    filter,
  } = context

  const listToRender = useMemo(() => {
    if (filter === 'popular') {
      return [...movies].sort((a, b) => b.popularity - a.popularity)
    }

    return movies
  }, [movies, filter])

  if(listToRender.length === 0 ) {
    return (
      <div className={styles.searchEmptyMessage}>Nothing there</div>
    )
  }

  return (
    <ul
      className={styles.searchList}
    >
      {listToRender.map((movie) => (
        <MovieSearchItem
          key = {movie.id}
          {...movie}
        />
      ))}
    </ul>
  )
}

export default memo(MovieSearchList)