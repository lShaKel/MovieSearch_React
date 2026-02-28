import Field from "./Field.jsx";
import Button from "./Button.jsx";

const MovieSearchQForm = (props) => {
  const {
    query,
    handleQuery,
    setQuery,
  } = props

  const onSubmit = (event) => {
    event.preventDefault()
    handleQuery()
  }

  return (
    <form
      className="search__form"
      onSubmit={onSubmit}
    >
      <Field
        id = "movieName"
        value = {query}
        onInput = {(event) => setQuery(event.target.value)}
      >
        Movie Name:
      </Field>
      <Button
        className = "search__form-button "
        type = "submit"
      >
        Search query
      </Button>
    </form>
  )
}

export default MovieSearchQForm