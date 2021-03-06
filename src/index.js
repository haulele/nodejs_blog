const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const db = require('./config/db');
//Connect db
db.connect();

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
//middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
//morgan
app.use(morgan('combined'));

//template engine
app.engine('handlebars', engine());
app.engine('.hbs', engine({ extname: '.hbs' }));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// Routes init
route(app);
//
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
