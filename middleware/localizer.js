const messages = require('../initializers/messages').default;

export default function(req, res, next) {
  const ALLOWED_LOCALES = ['en-US', 'fr'];
  const path = req.path;

  ALLOWED_LOCALES.forEach((locale) => {
    if (path.startsWith(`/${locale}`)) {
      req.locale = locale;
      req.messages = messages().locale_data[locale];
      next();
    }
  });

  const err = new Error('Not Found');
  err.status = 404;
  next(err);
}
