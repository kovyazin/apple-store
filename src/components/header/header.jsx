/* Import libraries */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* Import styles */
import './header.scss'

const Header = ({ orderTotal }) => {
  return (
    <nav className="navbar is-light">
      <div className="container">
        <div className="navbar-brand">
          <Link className="logo navbar-item is-size-4" to="/">
            Apple Store
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="/cart" className="button is-primary is-outlined">
                Корзина &nbsp;
                <span className="tag is-primary">${orderTotal}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  orderTotal: PropTypes.number.isRequired
}

const mapStateToProps = ({ shoppingCart: { orderTotal } }) => ({
  orderTotal
})

export default connect(mapStateToProps)(Header)
