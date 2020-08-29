import React, { useState, useEffect } from 'react'
import { SearchIcon } from '../Icons'
import styles from '../styles/SearchInput.module.scss'

const SearchInput = ({ value, onChange }) => {
  const [newSearchValue, setnewSearchValue] = useState(value)

  useEffect(() => {
    setnewSearchValue(value)
  }, [value])

  return (
    <div className={styles.search}>
      <SearchIcon className={styles.search__icon} />
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
