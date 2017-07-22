import React from 'react'
import PropTypes from 'prop-types'
import { StaticRouter } from 'react-router-dom'

import App from './App'

export default function ServerRouter ({ location, context, locale }) {
  return (
    <StaticRouter location={location} context={context}>
      <App locale={locale}/>
    </StaticRouter>
  )
}

ServerRouter.propTypes = {
  locale: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  context: PropTypes.object.isRequired,
}
