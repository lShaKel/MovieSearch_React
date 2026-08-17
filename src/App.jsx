import Router from "./Router.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";
import {MoviesProvider} from "./context/MoviesContext.tsx";
import './styles'

const App = () => {
  const routes = {
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
