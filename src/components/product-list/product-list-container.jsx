/* Import libraries */
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { useEffect } from 'react'

/* Import components */
import ProductList from './product-list'
import withAppleStoreService from '../hoc'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

/* Import others */
import { addProductsToCart, fetchProducts } from '../../actions'

const ProductListContainer = ({
  products,
  fetchProducts,
  isLoading,
  hasError,
  onAddedToCart
}) => {
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  if (isLoading) return <Spinner />
  if (hasError) return <ErrorIndicator />
  return <ProductList products={products} onAddedToCart={onAddedToCart} />
}

ProductListContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchProducts: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  onAddedToCart: PropTypes.func.isRequired
}

const mapStateToProps = ({ products, isLoading, hasError }) => ({
  products,
  isLoading,
  hasError
})

const mapDispatchToProps = (dispatch, { appleStoreService }) => ({
  fetchProducts: fetchProducts(appleStoreService, dispatch),
  onAddedToCart: id => dispatch(addProductsToCart(id))
})

export default withAppleStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)
)
