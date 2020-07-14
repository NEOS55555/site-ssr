const express = require('express');
const app = express();
const path = require('path')
app.use('/img', express.static(path.join(__dirname, './images')));

app.listen(1234, '0.0.0.0', (err) => {
  if (err) throw err;
  console.log(`> Ready on ${1234}`);
});