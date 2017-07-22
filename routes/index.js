import React from 'react'
import { renderToString } from 'react-dom/server'
import { _ } from 'react-translations'

import ServerRouter from '../src/components/ServerRouter'

export default function (req, res) {
  const { locale, messages } = req

  let messagesForLocale = {}
  if (locale !== 'en-US') {
    messagesForLocale = { domain: locale, locale_data: {} }
    messagesForLocale.locale_data[locale] = messages
  }

  return res.render('index', {
    title: _('This is a title!')(locale),
    app: renderToString(<ServerRouter location={req.url} context={{}} locale={locale}/>),
    messages: JSON.stringify(messagesForLocale),
    locale,
  })
}
