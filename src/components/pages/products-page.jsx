import React from 'react'
import Search from '../search'
import ProductListContainer from '../product-list'

const ProductsPage = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="content">
          <Search />
        </div>
        <ProductListContainer />
      </div>
    </div>
  )
}

export default ProductsPage
