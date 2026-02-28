import MovieSearchItem from "./MovieSearchItem.jsx";

const MovieSearchList = (props) => {

  const {
    movies = [],
    filter,
    className,
  } = props

  const listToRender = filter === 'popular'
  ? [...movies].sort((a,b) => b.popularity - a.popularity)
    : movies

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

export default MovieSearchList