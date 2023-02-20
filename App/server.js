const express = require('express')
const mongoose = require()
const app = express()

// Set the view engine
app.set('view engine', 'ejs')

// GET request for the URL at /
app.get('/', (request, response) => {
    response.render('index', {title: "Healthcare System"})
})

// App is listening on port 3000
app.listen(3000, () => {
    console.log('Server started on port 3000.')
})