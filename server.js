//Chunk 1
const express = require('express');

const app = express();
const path = require('path');

const PORT = 5000;

//Chunk 2
//Data parsing

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.post('/email', (req, res) => {
  //@TODO
  //send email here
  console.log('Data: ', req.body);
  res.json({ message: 'Message Received!!!' });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server Started at Port ${PORT}`);
});
