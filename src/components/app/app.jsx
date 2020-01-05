/* Import libraries */
import React from 'react'

/* Import styles */
import Header from '../header'
import Search from '../search'
import ProductListContainer from '../product-list'
import TableCart from '../table-cart'

const App = () => {
  return (
    <>
      <Header />
      {/* <div className="section"> */}
      {/*  <div className="container"> */}
      {/*    <Search /> */}
      {/*  </div> */}
      {/* </div> */}
      <div className="section">
        <div className="container">
          <div className="content">
            <Search />
          </div>
          <ProductListContainer />
        </div>
      </div>
      <div className="section">
        <div className="container">
          <TableCart />
        </div>
      </div>
    </>
  )
}

export default App
