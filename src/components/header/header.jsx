/* Import libraries */
import React from 'react'
import { Link } from 'react-router-dom'

/* Import styles */
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">App Store</Link>
      </div>
      <div className={styles.cart}>
        <span className={styles.cartIcon} />
        <span className={styles.cartText}>6 Items ($200)</span>
      </div>
    </header>
  )
}

export default Header
