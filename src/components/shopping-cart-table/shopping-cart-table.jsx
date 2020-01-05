/* Import libraries */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* Import styles */
import './shopping-cart-table.scss'

/* Import others */
import {
  addProductsToCart,
  removeAllProductsFromCart,
  removeProductFromCart
} from '../../actions'

const ShoppingCartTable = ({
  cartProducts,
  onIncrease,
  onDecrease,
  onDelete,
  orderTotal
}) => {
  return (
    <div>
      <div className="content">
        <div className="is-size-3 has-text-weight-light">Ваша корзина</div>
      </div>
      {!cartProducts.length && (
        <div className="is-size-5 has-text-weight-light">
          Вы ещё не добавляли товаров в корзину
        </div>
      )}
      {!!cartProducts.length && (
        <>
          <table className="table is-fullwidth is-striped">
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
                    <div className="buttons are-small">
                      <button
                        type="button"
                        className="button is-warning is-outlined is-5"
                        onClick={() => onDecrease(id)}
                      >
                        <span className="icon">
                          <i className="fa fa-minus" />
                        </span>
                      </button>
                      <button
                        type="button"
                        className="button is-success is-outlined is-5"
                        onClick={() => onIncrease(id)}
                      >
                        <span className="icon">
                          <i className="fa fa-plus" />
                        </span>
                      </button>
                      <button
                        type="button"
                        className="button is-danger is-outlined is-5"
                        onClick={() => onDelete(id)}
                      >
                        <span className="icon">
                          <i className="fa fa-times" />
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="has-text-right is-size-3 has-text-weight-light">
            Общая сумма: ${orderTotal}
          </div>
        </>
      )}
    </div>
  )
}

ShoppingCartTable.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  orderTotal: PropTypes.number.isRequired
}

const mapStateToProps = ({ shoppingCart: { cartProducts, orderTotal } }) => ({
  cartProducts,
  orderTotal
})

const mapDispatchToProps = {
  onIncrease: addProductsToCart,
  onDecrease: removeProductFromCart,
  onDelete: removeAllProductsFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)
