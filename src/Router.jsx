import {useEffect, useState} from "react";

export const useRoute = () => {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setPath(window.location.pathname)
    }

    window.addEventListener('popstate', onLocationChange)

    return() => {
      window.removeEventListener('popstate', onLocationChange)
    }
  }, []);

  return path
}

const Router = (props) => {
  const { routes } = props
  const path = useRoute()

  if(path.startsWith('/movies/')){
    const id = path.replace('/movies/', '')
    const MoviesPage = routes['/movies/:id']

    return <MoviesPage params = {{ id }}/>
  }

  const Page = routes[path] ?? routes['*']

  return <Page />

}

export default Router
