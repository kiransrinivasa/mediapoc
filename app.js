const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const http = require('http').Server(app);
// const io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);

// serve the static assets (js/dashboard.js and css/dashboard.css)
// from the public/ directory
app.use(express.static(path.join(__dirname, 'public/')));

// serve the index.html page when someone visits any of the following endpoints:
//    1. /
//    2. /about
//    3. /contact
// app.get(/\/(about|contact)?$/, function(req, res) {
//   res.sendFile(path.join(__dirname, 'views/index.html'));
// });

// serve up the dashboard when someone visits /dashboard
app.get('/dashboard', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/dashboard.html'));
});
app.get('/news_slider', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/news_slider.html'));
});
//news_slider.html
// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to the beginning of nothingness.',
// }));

module.exports = app;
