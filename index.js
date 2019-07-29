const express = require('express');
const path = require('path');
const routes = require('./router');

const app = express();

//Enable Pug
app.set('view engine', 'pug');

//View Folder
app.set('views', path.join(__dirname, './views'));

//Define application paths
app.use('/', routes());

app.listen(3000);
