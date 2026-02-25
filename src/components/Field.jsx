const Field =  (props) => {
  const  {
    id,
    children,
  } = props

  return (
    <div className="Field">
      <label
        htmlFor={"movieName"}
        className="search__form-label"
      >
        {children}
      </label>
      <input
        className="search__form-input"
        id={id}
        placeholder=" "
        autoComplete="off"
      />
    </div>
  )
}

export default Field

