import messages from '../initializers/messages'

const DEFAULT_LOCALE = 'en-US'
export const ALLOWED_LOCALES = ['en-US', 'fr']

export default function (req, res, next) {
  const resolvedLocale = ALLOWED_LOCALES.find(locale => (
    req.path.startsWith(`/${locale}`)
  )) || DEFAULT_LOCALE

  // (*) Sets locale of the request
  req.locale = resolvedLocale

  // (*) Sets messages for that locale, to be used
  // when rendering the HTML page for client
  req.messages = {}
  if (resolvedLocale !== 'en-US') {
    req.messages = { domain: resolvedLocale, locale_data: {} }
    req.messages.locale_data[resolvedLocale] = messages().locale_data[resolvedLocale]
  }

  next()
}
