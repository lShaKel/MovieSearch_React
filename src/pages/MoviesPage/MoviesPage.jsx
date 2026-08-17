import {useContext, useEffect, useState} from "react";
import Loader from "../../components/Loader/Loader.jsx";
import {MoviesContext} from "../../context/MoviesContext.tsx";
import styles from './MoviesPage.module.scss'

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
        setTimeout(() => {        setIsLoading(false)}, 500)
      }

  }, [movieId, getMovieById])

  if(isLoading) {
    return (
      <Loader/>
    )
  }

  if(hasError) {
    return <div>Movie not found</div>
  }

  const {
    src = null,
    poster_path = null,
    backdrop_path = null,
    title,
    overview = '',
    vote_average = '',
  } = movie

  const path = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : src ?? 'unlucky.jpg'

  return(
    <div className={styles.Movie_page}>
      <h1>{title}</h1>
      <p>Average rating:{vote_average}</p>
      <img
        src={path}
        alt= 'Poster of the film'
        width="320px"
        height="400px"
      />
      <p>{overview}</p>
    </div>
  )
}

export default MoviesPage