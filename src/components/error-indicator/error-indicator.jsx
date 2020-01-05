/* Import libraries */
import React from 'react'

/* Import styles */
// import styles from './error-indicator.module.scss'

const ErrorIndicator = () => {
  return (
    <div className="notification is-danger">
      Извините, произошла ошибка, мы скоро это исправим. Попробуйте
      перезагрузить страницу.
    </div>
  )
}

export default ErrorIndicator
