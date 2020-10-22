const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const fs = require('fs');


const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  {
    flags: 'a',
  }
);

app.use(helmet());
app.use(
  morgan('combined', {
    stream: accessLogStream,
  })
);


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/application';

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((res) => {
    console.log('Connection to database established!');
  })
  .catch((err) => {
    console.log('Connection failed!');
    console.log(err);
  });
