//Chunk 1
const express = require('express');

const app = express();
const path = require('path');

const PORT = 5000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server Started at Port ${PORT}`);
});
