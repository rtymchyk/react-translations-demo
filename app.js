import express from 'express'
import path from 'path'
import logger from 'morgan'

import index from './routes/index'
import localizer from './middleware/localizer'
import messages from './initializers/messages'
import { setMessages } from 'react-translations'

const app = express()

setMessages(messages())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(localizer)
app.get('/:locale?', index)

app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500).render('error')
})

export default app
