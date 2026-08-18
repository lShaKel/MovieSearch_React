import {useContext, useEffect, useState} from "react";
import Loader from "../../components/Loader/Loader";
import {MoviesContext} from "../../context/MoviesContext";
import styles from './MoviesPage.module.scss'
import type {Movie} from "../../util/movies.types";

type MoviePageProps = {
  params: {
    id: string
  }
}

const MoviesPage = (props:MoviePageProps) => {

  const context = useContext(MoviesContext)
  if(context === undefined) {throw new Error('Invalid Context')}

  const { params } = props
  const movieId = Number(params.id)

  const { getMovieById } = context

  const [movie, setMovie] = useState<Movie | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
      try {
        const movieData = getMovieById(movieId)

        setMovie(movieData)
        setHasError(false)
      } catch (error) {
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
  if(movie === null) {return <div>Something went wrong</div>}
  const {
    src,
    poster_path,
    backdrop_path,
    title,
    overview,
    vote_average,
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