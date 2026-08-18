import type{ComponentType} from "react";
import Router from "./Router";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import {MoviesProvider} from "./context/MoviesContext";
import './styles'

type Routes = Record<string, ComponentType>

const App = () => {
  const routes:Routes = {
    '/':HomePage,
    '/movies/:id': MoviesPage,
    '*': () => <div className="search__empty-message">404 Not Found</div>
  }

  return (
    <MoviesProvider>
      <Router routes={routes} />
    </MoviesProvider>
  )
}

export default App
