'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

const PORT = process.env.PORT || 3030;

const server = app.listen(PORT, () =>
  console.log('~~~ Tuning in to the waves of port ' + PORT + ' ~~~')
);

let onClose = function() {
  server.close(() => {
    console.log('Process terminated');
  });
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);
