const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./router');

const app = express();

//Body Parser to read the form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connect Mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ShorteningUrl', {
	useNewUrlParser: true
});

//Enable Pug
app.set('view engine', 'pug');

//View Folder
app.set('views', path.join(__dirname, './views'));

//Upload static files to public
app.use(express.static('public'));

//Define application paths
app.use('/', routes());

app.listen(3000);
