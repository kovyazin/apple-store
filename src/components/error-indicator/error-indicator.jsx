/* Import libraries */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

/* Import styles */
import './error-indicator.scss'

const Notification = ({ onHide }) => {
  return (
    <div className="notification is-danger">
      <button type="button" className="delete" onClick={onHide} />
      Извините, произошла ошибка, мы скоро это исправим. Попробуйте
      перезагрузить страницу.
    </div>
  )
}

Notification.propTypes = {
  onHide: PropTypes.func.isRequired
}

const ButtonReload = ({ onReload }) => {
  return (
    <div className="button-wrapper">
      <button
        type="button"
        className="button-reload has-text-primary"
        onClick={onReload}
      >
        <i className="fas fa-redo-alt" />
      </button>
    </div>
  )
}

ButtonReload.propTypes = {
  onReload: PropTypes.func.isRequired
}

const ErrorIndicator = ({ onReload }) => {
  const [visibility, setVisibility] = useState(true)

  const onHideNotification = () => {
    setVisibility(false)
  }

  if (visibility) return <Notification onHide={onHideNotification} />
  return <ButtonReload onReload={onReload} />
}

ErrorIndicator.propTypes = {
  onReload: PropTypes.func.isRequired
}

export default ErrorIndicator
