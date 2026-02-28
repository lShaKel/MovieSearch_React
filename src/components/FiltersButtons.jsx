import Button from "./Button.jsx";

const FiltersButtons = (props) => {
  const {
    loadMoreClass,
    switchClass,
    type,
    loadMore,
    switchList,
  } = props

  return (
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
}

export default FiltersButtons