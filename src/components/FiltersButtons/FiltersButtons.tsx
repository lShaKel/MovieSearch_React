import { memo, useContext } from "react";
import {MoviesContext} from "../../context/MoviesContext"
import Button from "../Button/Button";
import styles from './FilterButtons.module.scss'

const FiltersButtons = () => {

  const context = useContext(MoviesContext)

  if(context === undefined) {
  throw new Error('Context is undefined')
  }
  const {hasMovies, loadMore, handleFilter} = context



  return hasMovies ? (
    <div className={styles.filters}>
      <Button
        className ={styles.loadButton ?? ''}
        onClick = {loadMore}
      >
        Load more
      </Button>
      <Button
        className ={styles.switchButton ?? ''}
        onClick = {handleFilter}
      >
        Popular / Top rated
      </Button>
    </div>
  )
    : null
}

export default memo(FiltersButtons)