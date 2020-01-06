/* Import libraries */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setSearchValue } from '../../actions'

const Search = ({ setSearchValue, searchValue }) => {
  const onChangeInput = e => {
    setSearchValue(e.target.value)
  }

  const onResetInput = () => {
    setSearchValue('')
  }

  return (
    <div className="field is-grouped">
      <div className="control is-expanded">
        <input
          className="input"
          type="text"
          value={searchValue}
          onChange={onChangeInput}
          placeholder="Напишите что вы хотите найти"
        />
      </div>
      <div className="control">
        <button
          type="button"
          className="button is-danger"
          onClick={onResetInput}
        >
          Сбросить
        </button>
      </div>
    </div>
  )
}

Search.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired
}

const mapStateToProps = ({ search: { searchValue } }) => ({ searchValue })

export default connect(mapStateToProps, { setSearchValue })(Search)
