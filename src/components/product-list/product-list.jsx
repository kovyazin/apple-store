/* Import libraries */
import React from 'react'
import PropTypes from 'prop-types'

/* Import components */
import ProductListItem from '../product-list-item'

/* Import styles */
import styles from './product-list.module.scss'

const ProductList = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map(({ title, id, price }) => {
        return <ProductListItem title={title} id={id} price={price} key={id} />
      })}
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ProductList
