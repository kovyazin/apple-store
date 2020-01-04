/* Import libraries */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

/* Import components */
import App from './components/app'
import ErrorBoundry from './components/error-boundry'
import { AppleStoreServiceProvider } from './components/apple-store-service-context'

/* Import styles */
import './index.scss'

/* Import others */
import AppleStoreService from './services'
import store from './store'

const appleStoreService = new AppleStoreService()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <AppleStoreServiceProvider value={appleStoreService}>
        <Router>
          <App />
        </Router>
      </AppleStoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
)
