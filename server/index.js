const express = require('express');
const cors = require('cors');
const db = require('./postgreSQL');
require('dotenv').config();
const controller = require('./controller');

const app = express();
module.exports.app = app;

app.use(express.json());
app.use(cors());

app.get('/products', controller.get);

app.get('/products/:product_id', controller.getOne);

app.get('/products/:product_id/styles', controller.getStyles);

app.get('/products/:product_id/related', controller.getRelated);

app.get('/loaderio-15d5975ca9e8c2c778c0deae7dab52dd', controller.loader);

app.listen(process.env.PORT);

// 3 tests
// 100 users, 1000 users, 5000 users
// create index in schema

