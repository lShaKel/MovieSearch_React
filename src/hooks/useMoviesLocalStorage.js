const useMoviesLocalStorage = (Key) => {

  const loadFromLocalStorage = () => {
    const savedTheme = localStorage.getItem(Key)

    if(savedTheme) return JSON.parse(savedTheme)
    else return false

  }

  const saveThemeToLocalStorage = (isDarkMode) => {
    localStorage.setItem(Key, JSON.stringify(isDarkMode))
  }

  return {
    loadFromLocalStorage,
    saveThemeToLocalStorage,
  }
}

export default useMoviesLocalStorage