import { memo, useContext } from "react";
import {MoviesContext} from "../../context/MoviesContext.jsx"
import Button from "../Button/Button.jsx";
import styles from './FilterButtons.module.scss'

const FiltersButtons = () => {

  const {
    hasMovies,
    loadMore,
    handleFilter,
  } = useContext(MoviesContext)

  return hasMovies ? (
    <div className={styles.filters}>
      <Button
        className ={styles.loadButton}
        onClick = {loadMore}
      >
        Load more
      </Button>
      <Button
        className ={styles.switchButton}
        onClick = {handleFilter}
      >
        Popular / Top rated
      </Button>
    </div>
  )
    : null
}

export default memo(FiltersButtons)