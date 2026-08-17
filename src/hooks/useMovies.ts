import {useCallback, useEffect, useRef, useState} from "react";
import useMoviesLocalStorage from "./useMoviesLocalStorage";
import type {Movie,TMDBResponse, MoviesModes, MoviesFilters, MoviesEndPoint} from "../util/movies.types"

const useMovies = () => {

  const THEME_KEY = 'isDarkTheme'
  const { saveThemeToLocalStorage, loadFromLocalStorage } = useMoviesLocalStorage(THEME_KEY)

  const [movies, setMovies] = useState<Movie[]>([
      {id: 11, title: 'Oregairu', src: '/Oregairu.jpg'},
      {id: 12, title: 'Oregairu', src: '/Oregairu.jpg'},
    ])

  const totalMovies = movies.length
  const hasMovies = totalMovies > 0

  const [page, setPage] = useState<number | null>(null)
  const [mode, setMode] = useState<MoviesModes>('default')
  const [query, setQuery] = useState<string>('')
  const [filter, setFilter] = useState<MoviesFilters>('all')

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => loadFromLocalStorage())

  const lastQueryRef = useRef('')

  const themeChange = useCallback( () => {
    setIsDarkMode(prev => !prev)
  }, [])

  const searchMovies = useCallback(async (pageToUse:number, queryToUse:string, modeToUse:MoviesModes) => {
    try {
      let searchMovies:Movie[] = []

      if (modeToUse === 'discover') {
        searchMovies = await fetchMovies({year: 2025, page: pageToUse}, 'discover/movie')
      }

      if (modeToUse === 'query') {
        if (!queryToUse.trim()) return

        lastQueryRef.current = queryToUse
        searchMovies = await fetchMovies({query:queryToUse,page: pageToUse}, 'search/movie')
        setQuery('')
      }

      setMovies(prev => {
        const uniqueMovies:Movie[] = searchMovies.filter(
          movie => !prev.some(prevMovie => prevMovie.id === movie.id)
        )
        return [...prev, ...uniqueMovies]
      })
    } catch (err) {
      setMovies([])
    }
  }, [])

  const loadMore = useCallback(async () => {
    if(!page) return

    const nextPage = page + 1
    setPage(nextPage)

    const queryToUse = lastQueryRef.current

    searchMovies(nextPage, queryToUse, mode).catch(error => error)
  }, [page, mode, searchMovies])


  const fetchMovies = async (params: Record<string, string | number>, endpoint:MoviesEndPoint) => {
    const queryParams = new URLSearchParams({
      api_key: 'b1229af585e82db703e1a1cd074ea253',
      ...params
    })

    const url = `https://api.themoviedb.org/3/${endpoint}?${queryParams}`
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Something went wrong')
    }

    const data:TMDBResponse<Movie> = await response.json()

    if (data.results.length === 0) {
      throw new Error('Nothing was found')
    }


    return data.results
  }

  const getMovieById = (id:number) => {
    const neededMovie = movies.find((movie) => {
      return movie.id === id
    })

    if(!neededMovie) throw new Error('Not found')

    return neededMovie
  }

  useEffect(() => {
    if(page === null) return

    searchMovies(page, query, mode).catch(err => err)
  }, [mode, page, searchMovies])

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
    if (!hasMovies) return

    if (filter !== 'popular') {
      setFilter('popular')
    }

    if (filter === 'popular') {
      setFilter('default')
    }
  }

  return {
    movies,
    hasMovies,
    filter,
    query,
    isDarkMode,
    setQuery,
    handleQuery,
    handleDiscover,
    loadMore,
    handleFilter,
    themeChange,
    getMovieById
  }
}

export default useMovies