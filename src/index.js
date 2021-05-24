const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routers/index')
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
// form html => middleware urlencoded
app.use(express.urlencoded({
    extended: true
}))
// code js => ...
app.use(express.json())

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
 
// routes init
route(app);




app.listen(port, () => console.log(`Say hi with port: http://localhost:${port}`))