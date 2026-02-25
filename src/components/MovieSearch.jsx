import Button from "./Button.jsx";
import Loader from "./Loader.jsx";
import MovieSearchList from "./MovieSearchList.jsx";
import FiltersButtons from "./FiltersButtons.jsx";
import MovieSearchQForm from "./MovieSearchQForm.jsx";

const MovieSearch = () => {

  const movies = [
    {id: 1, title:'Oregairu', src: '/Oregairu.jpg'},
    {id: 2, title:'Oregairu', src: '/Oregairu.jpg'},
  ]

  return (
    <div className= "search">
        <MovieSearchQForm />
        <Button
          className = "search__form-button discover-button"
          type = "submit"
        >
          Search discover
        </Button>
        <FiltersButtons
          loadMoreClass="search__form-button load-more"
          switchClass="search__form-button switch-button"
          type = "button"
        />
        <MovieSearchList
          className = "search__list"
          movies = {movies}
        />
        <Button
          className = "theme-changer"
          type = "button"
          onClick = {() => console.log('Click')}
        >
          Change theme
        </Button>
        <Loader
          className = "loader visually-hidden"
        />
    </div>
  )
}
export default MovieSearch