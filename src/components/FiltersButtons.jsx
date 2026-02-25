import Button from "./Button.jsx";

const FiltersButtons = (props) => {
  const {
    loadMoreClass,
    switchClass,
    type,
  } = props

  return (
    <div className="filters">
      <Button
        className ={loadMoreClass}
        type ={type}
      >
        Load more
      </Button>
      <Button
        className ={switchClass}
        type = {type}
      >
        Popular / Top rated
      </Button>
    </div>
  )
}

export default FiltersButtons