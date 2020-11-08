//Chunk 1
const express = require('express');

const app = express();
const path = require('path');

const PORT = 5000;

const sendMail = require('./mail');

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

  const { email, subject, text } = req.body;
  sendMail(email, subject, text, function (err, data) {
    if (err) {
      res.status(500).json({ msg: 'Server Error' });
    } else {
      res.json({ msg: 'Email Sent!' });
    }
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server Started at Port ${PORT}`);
});
