import Button from "../Button/Button";
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoMovie}>Movie</span>
        <span className={styles.logoSearch}>Search</span>
      </div>
      <Button variant='burger'></Button>
    </header>
  )
}

export default Header