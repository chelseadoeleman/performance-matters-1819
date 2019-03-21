'use strict'

const express = require('express')
const helmet = require('helmet')
const path = require('path')
const handleIndexRoute = require('./routes/indexRoute')
const handleDetailRoute = require('./routes/detailRoute')
const app = express()

app.use(helmet())
app.use(express.static(path.join(__dirname, '../public')))

app.set('view engine', 'ejs')
app.set('views', `${__dirname}/views`)

app.get('/', handleIndexRoute)
app.get('/detail/:id', handleDetailRoute)

app.listen({ port: process.env.PORT || 3000 }), () => {
    console.log(`listening on port ${process.env.PORT || 3000}`)
}

// app.use(shrinkRay({cache: () => false,cacheSize: false,filter: () => true,brotli: {quality: 4 // between 1 and 11},zlib: {level: 6 // between 1 and 9}}))