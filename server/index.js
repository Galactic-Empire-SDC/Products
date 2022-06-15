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

app.listen(process.env.PORT);

// 3 tests
// 100 users, 1000 users, 5000 users
// create index in schema

