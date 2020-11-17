const express = require('express');
const app = express();

const path = require('path');


app.set('trust proxy', 1); // trust first proxy

// Middleware
app.use(express.json());
app.use(express.urlencoded());


// Router for frontend
app.use(express.static(path.join(__dirname, './web')));
app.use('/**', function (req, res) {
  res.sendFile('./web/index.html', { root: __dirname, maxAge: 0 });
});

app.listen(5000, () => {
  console.log('server start');
});