import React from 'react'
import PropTypes from 'prop-types'

const ProductsFilter = ({ setFilterMethod, filterMethod }) => {
  const handleChangeSelect = e => {
    setFilterMethod(e.target.value)
  }

  return (
    <div className="select is-small">
      <select value={filterMethod} onChange={handleChangeSelect}>
        <option value="by decreasing price">По убыванию цены</option>
        <option value="by increasing price">По возрастанию цены</option>
      </select>
    </div>
  )
}

ProductsFilter.propTypes = {
  setFilterMethod: PropTypes.func.isRequired,
  filterMethod: PropTypes.string.isRequired
}

export default ProductsFilter
