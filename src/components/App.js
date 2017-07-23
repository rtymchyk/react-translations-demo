import React from 'react'
import PropTypes from 'prop-types'
import { LocaleProvider } from 'react-translations'
import { Route } from 'react-router-dom'

import Homepage from './Homepage'

export default function App ({ locale }) {
  return (
    <LocaleProvider locale={locale}>
      <Route path="/:locale" component={Homepage}/>
    </LocaleProvider>
  )
}

App.propTypes = {
  locale: PropTypes.string.isRequired,
}
