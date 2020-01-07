/* Import libraries */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

/* Import components */
import App from './components/app'
import ErrorBoundry from './components/error-boundry'

/* Import styles */
import './index.scss'

/* Import others */
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <Router>
        <App />
      </Router>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
)
