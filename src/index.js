const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname,'public')));

app.use(morgan('combined'))

//template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/trangchu', (req, res) => {
  res.render('home');
})
app.get('/trangtp', (req, res) => {
  res.render('trangtp');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})