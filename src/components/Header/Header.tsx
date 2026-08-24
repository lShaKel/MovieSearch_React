import Button from "../Button/Button";
import styles from './Header.module.scss'
import {useContext} from "react";
import {MoviesContext} from "../../context/MoviesContext";

const Header = () => {

  const context = useContext(MoviesContext)
  if(context === undefined) {throw new Error('Context invalid')}

  const {
    themeChange,
  } = context

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoMovie}>Movie</span>
        <span className={styles.logoSearch}>Search</span>
      </div>
      <Button variant='burger'  onClick={themeChange}></Button>
    </header>
  )
}

export default Header