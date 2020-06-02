const express = require('express');

const app = express();

app.get('/health', (req, res) => {
  res.json('OK');
});

app.use(express.static('public'));

app.listen(8080, () => {
  console.log('Application running on port 8080');
});
