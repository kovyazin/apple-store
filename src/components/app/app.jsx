/* Import libraries */
import React from 'react'

/* Import styles */
import './app.module.scss'
import Header from '../header'
import Search from '../search'

const App = () => {
  return (
    <div className="container">
      <Header />
      <Search />
    </div>
  )
}

export default App
