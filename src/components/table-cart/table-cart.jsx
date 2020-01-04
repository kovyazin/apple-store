/* Import libraries */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* Import styles */
import styles from './table-cart.module.scss'
import {
  addProductsToCart,
  removeAllProductsFromCart,
  removeProductFromCart
} from '../../actions'

const TableCart = ({ cartProducts, onIncrease, onDecrease, onDelete }) => {
  return (
    <div className={styles.tableCart}>
      <div className={styles.title}>Your Order</div>
      {!!cartProducts.length && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Count</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map(({ title, count, price, id }, idx) => (
              <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${price}</td>
                <td>
                  <button type="button" onClick={() => onDecrease(id)}>
                    -
                  </button>
                  <button type="button" onClick={() => onIncrease(id)}>
                    +
                  </button>
                  <button type="button" onClick={() => onDelete(id)}>
                    &times;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

TableCart.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

const mapStateToProps = ({ cartProducts }) => ({
  cartProducts
})

const mapDispatchToProps = {
  onIncrease: addProductsToCart,
  onDecrease: removeProductFromCart,
  onDelete: removeAllProductsFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(TableCart)
