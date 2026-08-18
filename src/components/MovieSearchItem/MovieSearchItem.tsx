import RouterLink from "../RouterLink.js";
import styles from './MovieSearchItem.module.scss'

type ItemProps = {
  id:number,
  title:string,
  poster_path?: string,
  src?: string,
}

const MovieSearchItem = (props:ItemProps) => {
  const {
    id,
    title,
    poster_path,
    src
  } = props

  const path = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : src

  return (
    <li className={styles.search__results}>
      <RouterLink to={`/movies/${id}`}>
        {title}
      </RouterLink>
      <img className={styles.img}
        src={path}
        alt={title}
      />
    </li>
  )
}

export default MovieSearchItem