const messages = require('../initializers/messages').default

export default function (req, res, next) {
  const DEFAULT_LOCALE = 'en-US'
  const ALLOWED_LOCALES = ['en-US', 'fr']
  const path = req.path

  ALLOWED_LOCALES.forEach((locale) => {
    if (path.startsWith(`/${locale}`)) {
      req.locale = locale
      req.messages = messages().locale_data[locale]
      next()
    }
  })

  req.locale = DEFAULT_LOCALE
  req.messages = messages().locale_data[DEFAULT_LOCALE]
  next()
}
