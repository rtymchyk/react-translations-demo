import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { setMessages } from '../../react-translations/built.js';

const locale = document.documentElement.getAttribute('lang');
const messages = document.getElementById('messages');
if (messages) {
  setMessages(JSON.parse(messages.innerHTML));
}
ReactDOM.render(<App locale={locale}/>, document.getElementById('app'));
