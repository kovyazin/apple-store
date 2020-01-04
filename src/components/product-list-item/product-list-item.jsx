/* Import libraries */
import React from 'react'
import PropTypes from 'prop-types'

/* Import styles */
import styles from './product-list-item.module.scss'

const ProductListItem = ({ title, price, id, imageUrl, onAddedToCart }) => {
  return (
    <div className={styles.productListItem}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.body}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>${price}</div>
        <button
          type="button"
          className={styles.btn}
          onClick={() => onAddedToCart(id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

ProductListItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onAddedToCart: PropTypes.func.isRequired
}

export default ProductListItem
