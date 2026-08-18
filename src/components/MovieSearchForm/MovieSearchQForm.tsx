import {type ChangeEvent, type SyntheticEvent, useContext} from "react";
import {MoviesContext} from "../../context/MoviesContext";
import Field from "../Field.js";
import Button from "../Button/Button";
import styles from './MovieSearchQForm.module.scss'

const MovieSearchQForm = () => {

  const context = useContext(MoviesContext)
  if(!context) { throw new Error ('Missing Context')}
  const {
    query,
    handleQuery,
    setQuery,
  } = context

  const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
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
        onInput = {(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
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