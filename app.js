require('dotenv').config();

const express = require('express');

const app = express();
const PORT = 5000 || process.env.PORT;

const expresslayout = require('express-ejs-layouts');

// setup static folder to public
app.use(express.static('public'));

// Template Engine
app.use(expresslayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./server/routes/main'));

app.listen(PORT, ()=>{
  console.log(`This app is running in port: ${PORT}.`);
})