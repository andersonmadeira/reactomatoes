import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.app__header}>
      <h1 className={styles.header__title}>
        <span role="img" aria-label="Tomato icon">
          🍅
        </span>
        &nbsp; Reactomatoes
      </h1>
      <nav className={styles.header__menu}>
        <ul className={styles.menu__items}>
          <li className={styles.menu__menu_item}>
            <Link to="/" className={styles.menu_item__link}>
              Home
            </Link>
          </li>
          <li className={styles.menu__menu_item}>
            <Link to="/favorites" className={styles.menu_item__link}>
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
