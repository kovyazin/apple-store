/* Import libraries */
import React from 'react'

/* Import styles */
import Header from '../header'
import { ProductsPage, ShoppingCartPage } from '../pages'

const App = () => {
  return (
    <>
      <Header />
      <ProductsPage />
      <ShoppingCartPage />
    </>
  )
}

export default App
