const useMoviesLocalStorage = (key:string) => {

  const loadFromLocalStorage = ():boolean => {
    const savedTheme = localStorage.getItem(key)

    if(savedTheme) return JSON.parse(savedTheme) as boolean
    else return false
  }

  const saveThemeToLocalStorage = (isDarkMode:boolean) => {
    localStorage.setItem(key, JSON.stringify(isDarkMode))
  }

  return {
    loadFromLocalStorage,
    saveThemeToLocalStorage,
  }
}

export default useMoviesLocalStorage