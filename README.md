# MovieSearch

### A movie discovery app built with React and TypeScript. Uses the TMDB API to search, browse and view detailed information about movies, with light/dark theme support.

# Demo 
#### https://lshakel.github.io/MovieSearch_React/

## Features:

* Search movies by title
* Discover mode — browse popular/recent movies without a query
* Filter results (e.g. by popularity)
* Load more results (pagination)
* Movie details view (poster, rating, overview)
* Light / dark theme, persisted in localStorage
* Loading and error states for all API requests
* Responsive UI

## Advanced Features:

* Custom client-side router (SPA), built without a routing library
* Base-path aware routing for GitHub Pages project deployment
* Custom 404 page handling
* Global state management using React Context
* Fully typed API layer and component props with TypeScript

## Tech Stack:

- React (Hooks, Context API)
- TypeScript
- SCSS Modules
- Vite (build tool)
- TMDB API (movie data source)
- GitHub Actions (CI/CD)

## State Architecture

- Context API for global state
- Custom hooks for business logic separation
- Refs used to track pagination/query state without triggering re-renders

## Custom Hooks

- useMovies – handles movie fetching, search, discover mode, pagination and theme state
- useMoviesLocalStorage – persists theme preference to localStorage

## Pages:

- HomePage – search and discover entry point, displays movie results
- MoviesPage – detailed view for a single movie
- 404 fallback – handles invalid routes

## Routing

- / – HomePage (search / discover view)
- /movies/:id – MoviesPage (movie details view)
– 404 fallback

#### Implemented using a custom router built on the History API, with base-path stripping so routing works correctly under a GitHub Pages subpath.

## API

#### Movie data is fetched from The Movie Database (TMDB) API:

- /search/movie – search by title
- /discover/movie – browse movies by filters (e.g. year)

#### An API key is required and read from an environment variable at build time.

## Deployment

#### Deployed to GitHub Pages via a GitHub Actions workflow, triggered on every push to master. The TMDB API key is injected at build time from a repository secret.

## Key Design Decisions

A custom router was implemented instead of a routing library, to practice working directly with the History API and route matching
Context API used to avoid prop drilling across search, filter and theme state
Refs used instead of state for values that shouldn't trigger re-renders (e.g. last search query for pagination)
Custom hooks introduced to separate business logic from UI components

##### Installation: 
git clone https://github.com/lShaKel/MovieSearch_React.git cd MovieSearch_React npm install

##### Create a .env file in the project root: VITE_TMDB_API_KEY=your_tmdb_api_key_here

##### Run locally: npm run dev