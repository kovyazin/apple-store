/* Import libraries */
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar is-light">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item is-size-4" to="/">
            App Store
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <button type="button" className="button is-primary is-outlined">
                Корзина
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
