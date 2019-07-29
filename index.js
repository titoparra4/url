const express = require('express');
const routes = require('./router');

const app = express();

//Define application paths
app.use('/', routes());

app.listen(3000);
