import express from 'express'
import path from 'path'
import logger from 'morgan'
import { setMessages } from 'react-translations'

import index from './routes/index'
import localizer, { ALLOWED_LOCALES } from './middleware/localizer'
import messages from './initializers/messages'

const app = express()

setMessages(messages()) // (*) Loads translation JSON files

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(localizer) // (*) Middleware that sets information on the 'req' object
app.get('/', (req, res, next) => { res.redirect('/en-US') })
app.get(`/${ALLOWED_LOCALES.join('|')}?(/*)?`, index)

app.use((req, res, next) => {
  const err = new Error('Page not found!')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = err
  res.status(err.status || 500)
  res.render('error')
})

export default app
