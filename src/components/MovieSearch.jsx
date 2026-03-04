import {useState, useEffect, useRef, useCallback} from "react";
import Button from "./Button.jsx";
import Loader from "./Loader.jsx";
import MovieSearchList from "./MovieSearchList.jsx";
import FiltersButtons from "./FiltersButtons.jsx";
import MovieSearchQForm from "./MovieSearchQForm.jsx";

const MovieSearch = () => {

  const THEME_KEY = 'isDarkTheme'

  const [movies, setMovies] = useState([
    {id: 1, title: 'Oregairu', src: '/Oregairu.jpg'},
    {id: 2, title: 'Oregairu', src: '/Oregairu.jpg'},
    ]
  )
  const totalMovies = movies.length
  const hasMovies = totalMovies > 0

  const [page, setPage] = useState(null)
  const [mode, setMode] = useState('')
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem(THEME_KEY)
    return savedTheme !== null ? JSON.parse(savedTheme) : false
  })

  const lastQueryRef = useRef('')

  const saveThemeToLocalStorage = (isDarkMode) => {
    localStorage.setItem(THEME_KEY, JSON.stringify(isDarkMode))
  }

  const themeChange = () => {
    setIsDarkMode(!isDarkMode)
  }

  const searcMovies = useCallback(async (pageToUse, queryToUse, modeToUse) => {
    try {
      let searchMovies = []

      if (modeToUse === 'discover') {
        searchMovies = await fetchMovies({year: 2025, page: pageToUse}, 'discover/movie')
      }

      if (modeToUse === 'query') {
        if (!queryToUse.trim()) return

        lastQueryRef.current = queryToUse
        searchMovies = await fetchMovies({query: queryToUse,page: pageToUse}, 'search/movie')
      }

      setMovies(prev => {
        const uniqueMovies = searchMovies.filter(
          movie => !prev.some(prevMovie => prevMovie.id === movie.id)
        )
        return [...prev, ...uniqueMovies]
      })

    } catch (err) {
      setMovies([])
    }

    setQuery('')
  }, [])

  const loadMore = useCallback(async () => {
    if(!page) return

    const nextPage = page + 1
    setPage(nextPage)

    const queryToUse = lastQueryRef.current

    searcMovies(nextPage, queryToUse, mode).catch(console.error)
  }, [page, mode, searcMovies])


  const fetchMovies = async (params, endpoint) => {
    const queryParams = new URLSearchParams({
      api_key: 'b1229af585e82db703e1a1cd074ea253',
      ...params
    })

    const url = `https://api.themoviedb.org/3/${endpoint}?${queryParams}`
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Something went wrong')
    }

    const data = await response.json()

    if (data.results.length === 0) {
      throw new Error('Nothing was found')
    }

    return data.results
  }


  useEffect(() => {
    searcMovies(page, query, mode).catch(err => console.log(err))
  }, [mode, page, searcMovies])

  useEffect(() => {
    document.body.classList.toggle('white', !isDarkMode)

    saveThemeToLocalStorage(isDarkMode)
  }, [isDarkMode])


  const handleDiscover = () => {
    setMode('discover')
    setPage(1)
    setMovies([])
  }

  const handleQuery = () => {
    setMode('query')
    setPage(1)
    setMovies([])
  }

  const handleFilter = () => {
    if (!movies) return

    if (filter !== 'popular') {
      setFilter('popular')
    }

    if (filter === 'popular') {
      setFilter('default')
    }
  }
  return (
    <div className={`search ${isDarkMode ? '' : 'white'}`}>
      <MovieSearchQForm
        query={query}
        handleQuery={handleQuery}
        setQuery={setQuery}
      />
      <Button
        className="search__form-button discover-button"
        type="submit"
        onClick={handleDiscover}
      >
        Search discover
      </Button>
      <FiltersButtons
        loadMoreClass="search__form-button load-more"
        switchClass="search__form-button switch-button"
        type="button"
        hasMovies = {hasMovies}
        loadMore={loadMore}
        switchList={handleFilter}
      />
      <MovieSearchList
        className="search__list"
        movies={movies}
        filter={filter}
      />
      <Button
        className="theme-changer"
        type="button"
        onClick={themeChange}
      >
        Change theme
      </Button>
      <Loader
        className="loader visually-hidden"
      />
    </div>
  )
}
export default MovieSearch