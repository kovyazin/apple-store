/* Import libraries */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

/* Import components */
import App from './components/app'
import ErrorBoundry from './components/error-boundry'
import { AppleStoreServiceProvider } from './components/apple-store-service-context'

/* Import services */
import AppleStoreService from './services'

/* Import styles */
import './index.scss'

const appleStoreService = new AppleStoreService()

ReactDOM.render(
  <ErrorBoundry>
    <AppleStoreServiceProvider value={appleStoreService}>
      <Router>
        <App />
      </Router>
    </AppleStoreServiceProvider>
  </ErrorBoundry>,
  document.getElementById('root')
)
