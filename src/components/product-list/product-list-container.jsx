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
import {
  addProductsToCart,
  fetchProducts,
  setFilteredProducts,
  setFilterMethod
} from '../../actions'

const ProductListContainer = ({
  products,
  filteredProducts,
  fetchProducts,
  setFilteredProducts,
  isLoading,
  hasError,
  onAddedToCart,
  searchValue,
  setFilterMethod,
  filterMethod
}) => {
  useEffect(fetchProducts, [])
  useEffect(() => {
    setFilteredProducts(searchValue)
  }, [products, searchValue, filterMethod])

  if (isLoading) return <Spinner />
  if (hasError) return <ErrorIndicator onReload={fetchProducts} />
  return (
    <ProductList
      products={filteredProducts}
      onAddedToCart={onAddedToCart}
      searchValue={searchValue}
      setFilterMethod={setFilterMethod}
      filterMethod={filterMethod}
    />
  )
}

ProductListContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  filteredProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchProducts: PropTypes.func.isRequired,
  setFilteredProducts: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  onAddedToCart: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  setFilterMethod: PropTypes.func.isRequired,
  filterMethod: PropTypes.string.isRequired
}

const mapStateToProps = ({
  productList: { products, filteredProducts, isLoading, hasError },
  search: { searchValue, filterMethod }
}) => ({
  products,
  filteredProducts,
  isLoading,
  hasError,
  searchValue,
  filterMethod
})

const mapDispatchToProps = (dispatch, { appleStoreService }) => ({
  fetchProducts: value => dispatch(fetchProducts(appleStoreService)(value)),
  onAddedToCart: id => dispatch(addProductsToCart(id)),
  setFilteredProducts: term => dispatch(setFilteredProducts(term)),
  setFilterMethod: method => dispatch(setFilterMethod(method))
})

export default withAppleStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)
)
