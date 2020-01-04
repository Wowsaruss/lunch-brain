const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { slackTest } = require('./slack');

const app = express();

app.use(cors());
app.use(bodyParser.json());

console.log('HIT! 1');
app.post('/testytest', slackTest);

module.exports = app;