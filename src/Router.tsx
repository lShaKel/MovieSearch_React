import {type ComponentType, useEffect, useState} from "react";

interface MoviesPageParams{
  id:string,
}

export interface RouterRoutes{
  '/': ComponentType,
  '/movies/:id':ComponentType<{ params:MoviesPageParams }>,
  '*':ComponentType,
}

interface RouterProps {
  routes: RouterRoutes,
}

type FallbackRouteKey = Exclude<keyof RouterRoutes, '/movies/:id'>

const BASE_PATH = import.meta.env.BASE_URL

const stripBase = (pathname: string): string => {
  if (BASE_PATH !== '/' && pathname.startsWith(BASE_PATH)) {
    const stripped = pathname.slice(BASE_PATH.length - 1) // лишаємо провідний '/'
    return stripped || '/'
  }
  return pathname
}

export const useRoute = () => {
  const [path, setPath] = useState<string>(() => stripBase(window.location.pathname))

  useEffect(() => {
    const onLocationChange = () => {
      setPath(stripBase(window.location.pathname))
    }

    window.addEventListener('popstate', onLocationChange)

    return () => {
      window.removeEventListener('popstate', onLocationChange)
    }
  }, []);
  return path
}

const Router = (props: RouterProps) => {
  const { routes } = props
  const path = useRoute()

  if (path.startsWith('/movies/')) {
    const id = path.replace('/movies/', '')
    const MoviesPage = routes['/movies/:id']

    return <MoviesPage params={{ id }}/>
  }

  const Page = routes[path as FallbackRouteKey] ?? routes['*']

  return <Page />
}

export default Router