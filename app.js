const express = require('express')
const app = express()
const port = 3000

// Create a route
app.get('/', (req, res) => res.send('We are on home'))
app.get('/posts', (req, res) => res.send('We are on posts'))

// Listen to the server
app.listen(port, () => console.log('Example app listening at http://localhost:3000'))
