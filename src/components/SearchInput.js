import React, { useState, useEffect } from 'react'
import styles from '../styles/SearchInput.module.scss'

const SearchInput = ({ value, onChange }) => {
  const [newSearchValue, setnewSearchValue] = useState(value)

  useEffect(() => {
    setnewSearchValue(value)
  }, [value])

  return (
    <div className={styles.content__search}>
      <span className={styles.search__icon}>
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="search"
          width="1em"
          height="1em"
          aria-hidden="true"
        >
          <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
        </svg>
      </span>
      <input
        data-testid="search-input"
        className={styles.search__input}
        type="text"
        spellCheck={false}
        placeholder="Search your fav movies"
        value={newSearchValue}
        onChange={(event) => {
          setnewSearchValue(event.target.value)
          onChange(event.target.value)
        }}
      />
    </div>
  )
}

export default SearchInput
