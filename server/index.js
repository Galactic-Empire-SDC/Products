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

app.listen(process.env.PORT);
