import express from 'express'
import { renderToString } from 'react-dom/server'
import React from 'react'
import App from '../src/components/App'
import { _ } from 'react-translations'

const router = express.Router()

router.get('/:locale?', (req, res, next) => {
  const { locale, messages } = req

  let resolvedMessages = {}
  if (locale !== 'en-US') {
    resolvedMessages = {
      domain: locale,
      locale_data: {},
    }
    resolvedMessages.locale_data[locale] = messages
  }

  res.render('index', {
    title: _('This is a title!')(locale),
    app: renderToString(<App locale={locale} />),
    locale,
    messages: JSON.stringify(resolvedMessages),
  })
})

module.exports = router
