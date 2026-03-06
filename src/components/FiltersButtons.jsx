import { memo, useContext } from "react";
import {MoviesContext} from "../context/MoviesContext.jsx"
import Button from "./Button.jsx";

const FiltersButtons = (props) => {
  const {
    loadMoreClass,
    switchClass,
    type,
  } = props

  const {
    hasMovies,
    loadMore,
    handleFilter,
  } = useContext(MoviesContext)

  return hasMovies ? (
    <div className="filters">
      <Button
        className ={loadMoreClass}
        type ={type}
        onClick = {loadMore}
      >
        Load more
      </Button>
      <Button
        className ={switchClass}
        type = {type}
        onClick = {handleFilter}
      >
        Popular / Top rated
      </Button>
    </div>
  )
    : null
}

export default memo(FiltersButtons)