import React from 'react'
import ReactDOM from 'react-dom'
import { setMessages } from 'react-translations'

import ClientRouter from 'components/ClientRouter'

// (*) Rehydrate messages & locale given to us by the server
const locale = document.documentElement.getAttribute('lang')
const messages = document.getElementById('messages')
if (messages) setMessages(JSON.parse(messages.innerHTML))

ReactDOM.render(<ClientRouter locale={locale}/>, document.getElementById('app'))
