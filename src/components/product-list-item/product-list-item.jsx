/* Import libraries */
import React from 'react'
import PropTypes from 'prop-types'

const ProductListItem = ({ title, price, id }) => {
  return (
    <div>
      <div>Title: {title}</div>
      <div>Price: {price}</div>
      <div>Id: {id}</div>
    </div>
  )
}

ProductListItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
}

export default ProductListItem
