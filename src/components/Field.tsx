import {type ChangeEvent, memo, type PropsWithChildren} from "react";

type FieldProps = {
  id: string,
  value: string,
  onInput:(event:ChangeEvent<HTMLInputElement>) => void,
}

const Field =  (props:PropsWithChildren<FieldProps>) => {
  const  {
    id,
    value,
    onInput,
    children,
  } = props

  return (
    <div className="Field">
      <label
        htmlFor={id}
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
        onChange={onInput}
      />
    </div>
  )
}

export default memo(Field)

