import {type ChangeEvent, memo, type PropsWithChildren} from "react";
import styles from './Field.module.scss'

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
    <div className={styles.field}>
      <label
        htmlFor={id}
        className={styles.label}
      >
        {children}
      </label>
      <input
        className={styles.input}
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

