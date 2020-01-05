/* Import libraries */
import React from 'react'
import PropTypes from 'prop-types'

const ProductListItem = ({ title, price, id, imageUrl, onAddedToCart }) => {
  return (
    <div className="box">
      <figure className="image">
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: `${150}px`,
            height: `${150}px`,
            objectFit: 'contain',
            margin: `${0} auto ${24}px`
          }}
        />
      </figure>
      <div className="content has-text-centered">
        <p className="title is-5 is-spaced has-text-weight-medium">{title}</p>
        <p className="subtitle is-6 has-text-weight-light">${price}</p>
        <button
          type="button"
          className="button is-primary is-outlined"
          onClick={() => onAddedToCart(id)}
        >
          В корзину
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
