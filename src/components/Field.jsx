import {memo} from "react";
const Field =  (props) => {
  const  {
    id,
    value,
    onInput,
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
        value = {value || ''}
        onInput={onInput}
      />
    </div>
  )
}

export default memo(Field)

