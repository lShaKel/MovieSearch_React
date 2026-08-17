export interface Movie{
  id: number,
  title: string,
  src:string,
}

export interface TMDBResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export type MoviesModes = 'discover' | 'query' | 'default'
export type MoviesFilters = 'all' | 'popular' | 'default'
export type MoviesEndPoint = 'discover/movie' | 'search/movie'