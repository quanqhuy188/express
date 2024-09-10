const express = require('express');
const { engine } = require('express-handlebars');
const route = require('./routes');
const { connect } = require('./config/db');

const path = require('path');

connect();

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
//Template engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//routing
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
