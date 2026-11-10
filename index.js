require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./router');

const app = express();

//Read the form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connect Mongo
mongoose
	.connect(process.env.MONGO_URI || 'mongodb://localhost/ShorteningUrl')
	.catch((error) => console.error('Error connecting to MongoDB:', error.message));

//Enable Pug
app.set('view engine', 'pug');

//View Folder
app.set('views', path.join(__dirname, './views'));

//Upload static files to public
app.use(express.static('public'));

//Define application paths
app.use('/', routes());

app.listen(process.env.PORT || 3000);
