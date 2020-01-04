/* Import libraries */
import React from 'react'

/* Import styles */
// import styles from './search.module.scss'

const Search = () => {
  return (
    <form>
      <div className="field is-grouped">
        <div className="control">
          <div className="select">
            <select>
              <option>По убыванию цены</option>
              <option>По возрастанию цены</option>
            </select>
          </div>
        </div>
        <div className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="Напишите что вы хотите найти"
          />
        </div>
        <div className="control">
          <button type="button" className="button is-primary">
            Поиск
          </button>
        </div>
      </div>
    </form>
  )
}

export default Search
