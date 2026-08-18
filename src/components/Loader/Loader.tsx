import type {CSSProperties} from "react";
import styles from './Loader.module.scss'

interface CSSProp extends CSSProperties{
  '--i'?: string | number
}

const Loader = () => {

  const text = "Loading...";

  return (
    <div
      className={`${styles.loader}`}
    >
      <div className={styles.text}>
        {text.split('').map((char,i) => (
          <span className={styles.span} key={i} style={{"--i": i + 1} as CSSProp}>
            {char}
          </span>
        ))}
      </div>
    </div>
  )
}
export default Loader