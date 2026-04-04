import Button from "../Button/Button.jsx";
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.icon}>MovieSearch</div>
      <Button variant='burger'></Button>
    </header>
  )
}

export default Header