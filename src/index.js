const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { slackTest } = require('./slack');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/lunch-order', slackTest);

module.exports = app;
