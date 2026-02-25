import MovieSearchItem from "./MovieSearchItem.jsx";

const MovieSearchList = (props) => {

  const {
    movies = [],
    className,
  } = props

  return (
    <ul
      className={className}
    >
      {movies.map((movie) => (
        <MovieSearchItem
          key = {movie.id}
          {...movie}
        />
      ))}
    </ul>
  )
}

export default MovieSearchList