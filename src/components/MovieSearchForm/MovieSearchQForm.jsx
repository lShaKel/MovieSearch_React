import {useContext} from "react";
import {MoviesContext} from "../../context/MoviesContext.tsx";
import Field from "../Field.jsx";
import Button from "../Button/Button.jsx";
import styles from './MovieSearchQForm.module.scss'

const MovieSearchQForm = () => {
  const {
    query,
    handleQuery,
    setQuery,
  } = useContext(MoviesContext)

  const onSubmit = (event) => {
    event.preventDefault()
    handleQuery()
  }

  return (
    <form
      className={styles.searchForm}
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