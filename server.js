require('dotenv').config()
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost:27017/webdev',
    {useNewUrlParser: true, useUnifiedTopology: true});


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "https://fp4550.herokuapp.com/");
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

require('./src/reducers/users-reducer')(app)
require('./src/reducers/bookmark-reducer')(app)
require('./src/reducers/recommendation-reducer')(app)
require('./src/reducers/producerFilms-reducer')(app)

//app.listen(process.env.PORT || 4000)
app.listen(4000)
