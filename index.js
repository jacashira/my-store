const express = require('express')
const cors= require('cors')
const routerApi = require('./routes')


const { logError, errorHandler,  boomErrorHandler } = require('./middlewares/error.handler')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const whitelist = ['http://localhost:8080']
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin) {
      callback(null,true)
    } else {
      callback(new Error('No permitido'))
    }
  }
}

app.use(cors(options))

app.get('/', (req, res) => {
  res.send('Hello Word my first server with express')
})

app.get('/new', (req, res) => {
  res.send('Hello I´m a new route')
})

routerApi(app)

app.use(logError)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port , () => {
  console.log('My port ',port);
})
