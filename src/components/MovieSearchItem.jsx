const movieSearchItem = (props) => {
  const {
    title,
    poster_path,
    src
  } = props

  const path = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : src

  return (
    <li className="search__results">
      <p>{title}</p>
      <img
        src={path}
        alt= 'Movies you waited for'
        width="320px"
        height="400px"
      />
    </li>
  )
}

export default movieSearchItem