import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="section has-text-centered">
      <div className="container">
        <div className="content">
          <div className="is-size-1 has-text-weight-bold">404</div>
          <div className="is-size-5 has-text-weight-light">
            Страницы, расположенной по данному адресу не существует
          </div>
        </div>
        <Link to="/" className="button is-primary">
          Вернуться на главную
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
