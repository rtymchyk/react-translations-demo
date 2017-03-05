import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import App from '../components/App';
import { _ } from '../../react-translations/built.js';

const router = express.Router();

const ALLOWED_LOCALES = ['en-US', 'fr'];

router.get('/', (req, res, next) => {
  res.redirect('/en-US');
});

router.get('/:locale', (req, res, next) => {
  let { locale } = req.params;
  if (!ALLOWED_LOCALES.includes(locale)) locale = 'en-US';

  const app = renderToString(<App locale={locale} />);

  res.render('index', { locale, title: _('This is a title!')(locale), app });
});

module.exports = router;
