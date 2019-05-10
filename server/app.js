require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
// const userRoutes = require('./routes/userRoutes')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes');
const morgan = require('morgan');


mongoose.connect('mongodb://localhost/kartu-lebaran', { useNewUrlParser: true })
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/', routes)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})