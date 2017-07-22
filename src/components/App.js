import React from 'react';
import { LocaleProvider } from 'react-translations';
import Homepage from './Homepage';

export default function({ locale }) {
  return <LocaleProvider locale={locale}><Homepage /></LocaleProvider>;
}
