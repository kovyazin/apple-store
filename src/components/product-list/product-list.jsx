/* Import libraries */
import React from 'react'
import PropTypes from 'prop-types'

/* Import components */
import ProductListItem from '../product-list-item'
import ProductsFilter from '../products-filter'

const ProductList = ({ products, onAddedToCart }) => {
  return (
    <>
      <div className="level">
        <div className="level-left">
          <h1 className="is-size-3 has-text-weight-light">Все товары</h1>
        </div>
        <div className="level-right">
          <ProductsFilter />
        </div>
      </div>
      <div className="columns is-multiline">
        {products.map(({ title, id, price, imageUrl }) => {
          return (
            <div className="column is-3" key={id}>
              <ProductListItem
                title={title}
                id={id}
                price={price}
                imageUrl={imageUrl}
                onAddedToCart={onAddedToCart}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddedToCart: PropTypes.func.isRequired
}

export default ProductList
