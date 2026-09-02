import {useContext, useEffect, useState} from "react";
import {MoviesContext} from "../../context/MoviesContext";
import type {Movie} from "../../util/movies.types";
import Header from "../../components/Header/Header";
import styles from './MoviesPage.module.scss'

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
  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
      try {
        const movieData = getMovieById(movieId)

        setMovie(movieData)
        setHasError(false)
      } catch (error) {
        setHasError(true)
      }

  }, [movieId, getMovieById])

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
    <div className={styles.MoviePage}>
      <Header />
    <div className={styles.movieDetails}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.rating}>Average rating: {vote_average}</h2>
      <img
        className={styles.moviePoster}
        src={path}
        alt= 'Poster of the film'
        width="320px"
        height="400px"
      />
      <p className={styles.overview}>{overview}</p>
    </div>
      </div>
      )
}

export default MoviesPage