import Button from "./Button.jsx";

const FiltersButtons = (props) => {
  const {
    loadMoreClass,
    switchClass,
    type,
    hasMovies,
    loadMore,
    switchList,
  } = props

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
        onClick = {switchList}
      >
        Popular / Top rated
      </Button>
    </div>
  )
    : null
}

export default FiltersButtons