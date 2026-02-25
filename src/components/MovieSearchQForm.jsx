import Field from "./Field.jsx";
import Button from "./Button.jsx";

const MovieSearchQForm = () => {

  return (
    <form
      className="search__form"
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        id = "movieName"
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