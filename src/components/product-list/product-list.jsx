/* Import libraries */
import React from 'react'
import PropTypes from 'prop-types'

/* Import components */
import ProductListItem from '../product-list-item'
import ProductsFilter from '../products-filter'

import './product-list.scss'

const ProductList = ({ products, onAddedToCart, searchValue }) => {
  return (
    <>
      <div className="level">
        <div className="level-left">
          <h1 className="is-size-3 has-text-weight-light products-title">
            {searchValue && (
              <>
                {`Результаты по запросу "${searchValue}": ${products.length}`}
              </>
            )}
            {!searchValue && 'Все товары'}
          </h1>
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
      {!!searchValue && !products.length && (
        <div className="section has-text-centered">
          <div className="is-size-2">Ничего не найдено</div>
        </div>
      )}
    </>
  )
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddedToCart: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired
}

export default ProductList
