import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Header.module.scss'
import { StateContext } from '../state'

const Header = () => {
  const {
    state: { favorites },
  } = useContext(StateContext)

  return (
    <header className={styles.app__header}>
      <h1 className={styles.header__title}>
        <span role="img" aria-label="Tomato icon">
          🍅
        </span>
        &nbsp;
        <Link to="/" className={styles.header__title__link}>
          Reactomatoes
        </Link>
      </h1>
      <Link to="/favorites" className={styles.header__favorites_link}>
        <span role="img" aria-label="Heart icon">
          ❤️({favorites.length})
        </span>
      </Link>
    </header>
  )
}

export default Header
