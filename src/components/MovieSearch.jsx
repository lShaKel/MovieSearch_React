import {useState, useEffect} from "react";
import Button from "./Button.jsx";
import Loader from "./Loader.jsx";
import MovieSearchList from "./MovieSearchList.jsx";
import FiltersButtons from "./FiltersButtons.jsx";
import MovieSearchQForm from "./MovieSearchQForm.jsx";

const MovieSearch = () => {

  const [movies, setMovies] = useState([
    {id: 1, title:'Oregairu', src: '/Oregairu.jpg'},
    {id: 2, title:'Oregairu', src: '/Oregairu.jpg'},
    ]
  )

  const [mode, setMode] = useState('') // 'discover' | 'query'
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')

  const [isDarkMode, setIsDarkMode] = useState('')

  useEffect(() => {
    searcMovies()
  }, [mode])

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('white')
    } else {
      document.body.classList.remove('white')
    }
  }, [isDarkMode])

  const themeChange = () => {
    setIsDarkMode(!isDarkMode)
  }

  const loadMore = () => {
    console.log('Loaded')
  }


  const searcMovies = async () => {
    try{
      if(mode === 'discover') {
        const params = {year: 2025, page: 1}

        const movies = await fetchMovies(params, 'discover/movie')
        setMovies(movies)
      }

      if(mode === 'query') {
        if(!query.trim()) return

        const movies = await fetchMovies({query, page: 1}, 'search/movie')
        setMovies(movies)
      }
    } catch (err) {
      setMovies([])
    }

    setQuery('')
    setMode('')
  }

  const fetchMovies = async (params, endpoint) => {
    const queryParams = new URLSearchParams({
      api_key: 'b1229af585e82db703e1a1cd074ea253',
      ...params
    })

    const url = `https://api.themoviedb.org/3/${endpoint}?${queryParams}`
    const response = await fetch(url)

    if(!response.ok) {
      throw  new Error('Something went wrong')
    }

    const data = await response.json()

    if(data.results.length === 0) {
      throw new Error('Nothing was found')
    }

    return data.results
  }

  const handleDiscover = () => {
    setMode('discover')
  }

  const handleQuery = () => {
    setMode('query')
  }

  const handleFilter = () => {
    if(!movies) return

    if(filter !== 'popular') {
      setFilter('popular')
    }

    if(filter === 'popular') {
      setFilter('default')
    }
  }

  return (
    <div className={`search ${isDarkMode ? '' : 'white'}`} >
        <MovieSearchQForm
          query = {query}
          handleQuery ={handleQuery}
          setQuery = {setQuery}
        />
        <Button
          className = "search__form-button discover-button"
          type = "submit"
          onClick = {handleDiscover}
        >
          Search discover
        </Button>
        <FiltersButtons
          loadMoreClass="search__form-button load-more"
          switchClass="search__form-button switch-button"
          type = "button"
          loadMore = {loadMore}
          switchList = {handleFilter}
        />
        <MovieSearchList
          className = "search__list"
          movies = {movies}
          filter = {filter}
        />
        <Button
          className = "theme-changer"
          type = "button"
          onClick = {themeChange}
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