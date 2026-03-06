import {createContext, useCallback, useEffect, useRef, useState, useMemo} from "react";
import useMoviesTasks from "../hooks/useMoviesTasks.js";

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
  } = useMoviesTasks()

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
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
}