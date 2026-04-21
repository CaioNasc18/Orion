const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/api/msg', (req, res) => {
  res.json({ message: 'Olá do backend!' });
});

app.listen(3000, () => {
  console.log('Servidor em http://localhost:3000');
});