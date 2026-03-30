import styles from './Loader.module.scss'

const Loader = () => {

  const text = "Loading...";

  return (
    <div
      className={`${styles.loader}`}
    >
      <div className={styles.text}>
        {text.split('').map((char,i) => (
          <span className={styles.span} key={i} style={{"--i": i + 1}}>
            {char}
          </span>
        ))}
      </div>
    </div>
  )
}
export default Loader