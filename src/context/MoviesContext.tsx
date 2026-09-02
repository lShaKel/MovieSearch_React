import {createContext, type ReactNode} from "react";
import useMovies from "../hooks/useMovies";

type MoviesContextValue = ReturnType<typeof useMovies>
export const MoviesContext = createContext<MoviesContextValue | undefined>(undefined)

interface MoviesProviderProps {
  children: ReactNode
}
export const MoviesProvider = (props:MoviesProviderProps) => {
  const { children } = props

  const {
    movies,
    hasMovies,
    filter,
    query,
    isDarkMode,
    madeFirstFetch,
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
        madeFirstFetch,
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