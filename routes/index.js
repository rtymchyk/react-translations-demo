import React from 'react'
import { renderToString } from 'react-dom/server'
import { _ } from 'react-translations'

import ServerRouter from '../src/components/ServerRouter'

export default function (req, res) {
  const { locale, messages } = req

  res.render('index', {
    // (*) Uses locale of request to generate the page title
    title: _('This is a title!')(locale),
    // (*) Passes down locale of request to the React tree to be used by LocaleProvider
    app: renderToString(<ServerRouter location={req.url} context={{}} locale={locale}/>),
    // (*) Uses messages of request to render into body for client to rehydrate
    messages: JSON.stringify(messages),
    locale,
  })
}
