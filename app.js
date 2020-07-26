const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Middleware that will run before we hit any request
app.use(cors());
app.use(bodyParser.json());

// Import routes
const postsRoute = require('./routes/posts');

// Middleware
app.use('/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
  res.send('We are on home');
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log("connected to DB")
);

// Listen to the server
app.listen(port, () => console.log('Example app listening at http://localhost:3000'));

