import React from 'react'
import PropTypes from 'prop-types'
import { LocaleProvider } from 'react-translations'
import Homepage from './Homepage'

export default function App ({ locale }) {
  return <LocaleProvider locale={locale}><Homepage /></LocaleProvider>
}

App.propTypes = {
  locale: PropTypes.string.isRequired,
}
