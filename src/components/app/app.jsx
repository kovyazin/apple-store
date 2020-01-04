/* Import libraries */
import React from 'react'

/* Import styles */
import styles from './app.module.scss'
import Header from '../header'
import Search from '../search'
import ProductListContainer from '../product-list'
import TableCart from '../table-cart'

const App = () => {
  return (
    <div className="container">
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.products}>
        <ProductListContainer />
      </div>
      <TableCart />
    </div>
  )
}

export default App
