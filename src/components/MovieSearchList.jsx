import {memo, useMemo, useContext} from "react";
import { MoviesContext } from "../context/MoviesContext.jsx";
import MovieSearchItem from "./MovieSearchItem.jsx";

const MovieSearchList = (props) => {
  const {
    className,
  } = props
  const {
    movies = [],
    filter,
  } = useContext(MoviesContext)

  const listToRender = useMemo(() => {
    if (filter === 'popular') {
      return [...movies].sort((a, b) => b.popularity - a.popularity)
    }

    return movies
  }, [movies, filter])

  if(listToRender.length === 0 ) {
    return (
      <div className="search__empty-message">Nothing there</div>
    )
  }

  return (
    <ul
      className={className}
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