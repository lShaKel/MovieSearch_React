import {useContext, useEffect, useState} from "react";
import Loader from "../components/Loader.jsx";
import {MoviesContext} from "../context/MoviesContext.jsx";

const MoviesPage = (props) => {
  const { params } = props
  const movieId = Number(params.id)

  const { getMovieById } = useContext(MoviesContext)

  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
      try {
        const movieData = getMovieById(movieId)

        setMovie(movieData)
        setHasError(false)
      } catch (error) {
        console.log(error)
        setHasError(true)
      } finally {
        setIsLoading(false)
      }

  }, [movieId, getMovieById])

  if(isLoading) {
    return (
      <Loader
        className="loader"
      />
    )
  }

  if(hasError) {
    return <div>Movie not found</div>
  }

  const {
    src = null,
    poster_path = null,
    title,
  } = movie

  const path = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : src ?? 'unlucky.jpg'

  return(
    <div className="Movie_page">
      <h1>{title}</h1>
      <img
        src={path}
        alt= 'Movies you waited for'
        width="320px"
        height="400px"
      />
    </div>
  )
}

export default MoviesPage