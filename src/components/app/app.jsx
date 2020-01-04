/* Import libraries */
import React from 'react'

/* Import styles */
import './app.module.scss'
import Header from '../header'
import Search from '../search'
import ProductListContainer from '../product-list'

const App = () => {
  return (
    <div className="container">
      <Header />
      <Search />
      <ProductListContainer />
    </div>
  )
}

export default App
