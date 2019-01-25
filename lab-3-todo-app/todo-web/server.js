const express = require('express');
const path = require('path');

express()
  .use(express.static(path.join(__dirname, 'build')))
  .get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  })
  .listen(3000);
