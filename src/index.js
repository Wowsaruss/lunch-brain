const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { lunchOrder } = require('./slack');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/lunch-order', lunchOrder);

module.exports = app;
