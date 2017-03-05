import React from 'react';
import { LocaleProvider } from '../../react-translations/built.js';
import Homepage from './Homepage';

export default function({ locale }) {
  return (
      <LocaleProvider locale={locale}>
        <Homepage />
      </LocaleProvider>
  );
}
