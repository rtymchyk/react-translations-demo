import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

export default function ClientRouter ({ locale }) {
  return (
    <BrowserRouter>
      <App locale={locale}/>
    </BrowserRouter>
  )
}

ClientRouter.propTypes = {
  locale: PropTypes.string.isRequired,
}
