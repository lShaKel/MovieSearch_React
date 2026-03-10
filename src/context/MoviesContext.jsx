import {createContext} from "react";
import useMovies from "../hooks/useMovies.js";

export const MoviesContext = createContext({})

export const MoviesProvider = (props) => {
  const { children } = props

  const {
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
    getMovieById,
  } = useMovies()

  return (
    <MoviesContext.Provider
      value = {{
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
        getMovieById,
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
}