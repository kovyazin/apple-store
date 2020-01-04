/* Import libraries */
import React from 'react'

/* Import styles */
import styles from './search.module.scss'

const Search = () => {
  return (
    <form className={styles.search}>
      <input
        type="text"
        className={styles.input}
        placeholder="I need find to..."
      />
      <button type="submit" className={styles.btn}>
        Search
      </button>
    </form>
  )
}

export default Search
