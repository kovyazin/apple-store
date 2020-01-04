/* Import libraries */
import React from 'react'
import PropTypes from 'prop-types'

/* Import components */
import ProductListItem from '../product-list-item'

/* Import styles */
import styles from './product-list.module.scss'

const ProductList = ({ products, onAddedToCart }) => {
  return (
    <div className={styles.productList}>
      {products.map(({ title, id, price, imageUrl }) => {
        return (
          <div className={styles.productItem} key={id}>
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
  )
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddedToCart: PropTypes.func.isRequired
}

export default ProductList
