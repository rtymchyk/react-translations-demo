import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

const locale = document.documentElement.getAttribute('lang');
ReactDOM.render(<App locale={locale}/>, document.getElementById('app'));
