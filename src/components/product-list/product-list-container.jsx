/* Import libraries */
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'

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
  onAddedToCart,
  searchValue
}) => {
  const [filteredProducts, setFilteredProducts] = useState([])
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  useEffect(() => {
    setFilteredProducts(
      products.filter(({ title }) =>
        title.toLowerCase().includes(searchValue.toLowerCase())
      )
    )
  }, [products, searchValue])

  if (isLoading) return <Spinner />
  if (hasError) return <ErrorIndicator onReload={fetchProducts} />
  return (
    <ProductList
      products={filteredProducts}
      onAddedToCart={onAddedToCart}
      searchValue={searchValue}
    />
  )
}

ProductListContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchProducts: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  onAddedToCart: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired
}

const mapStateToProps = ({
  productList: { products, isLoading, hasError },
  search: { searchValue }
}) => ({
  products,
  isLoading,
  hasError,
  searchValue
})

const mapDispatchToProps = (dispatch, { appleStoreService }) => ({
  fetchProducts: value => dispatch(fetchProducts(appleStoreService)(value)),
  onAddedToCart: id => dispatch(addProductsToCart(id))
})

export default withAppleStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)
)
