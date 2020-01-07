/* Import libraries */
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

/* Import components */
import Header from '../header'
import { ProductsPage, ShoppingCartPage, NotFoundPage } from '../pages'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={ProductsPage} />
        <Route path="/cart" component={ShoppingCartPage} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="404" />
      </Switch>
    </>
  )
}

export default App
