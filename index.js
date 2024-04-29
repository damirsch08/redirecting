require('dotenv').config()
const CLIENT_URL = process.env.CLIENT_URL
const express = require('express')
const cors = require('cors')
const app = express()
const http = require('http').createServer(app)
const router = require('./router/index')

app.use(express.json())
app.use(cors({
  cors: {
		origin: CLIENT_URL || '*',
		methods: ['GET', 'POST']
	}
}))

app.use('/api', router)

const start = async () => {
  http.listen(5000, () => console.log('serever'))
}

start()