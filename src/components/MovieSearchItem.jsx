const movieSearchItem = (props) => {
  const {
    title,
    src,
  } = props

  return (
    <li className="search__results">
      <p>{title}</p>
      <img
        src={src}
        alt= 'Movies you waited for'
        width="320px"
        height="400px"
      />
    </li>
  )
}

export default movieSearchItem