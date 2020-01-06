const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { slashCommands, event } = require('./lib');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/lunch-order', slashCommands);
app.post('/lunch-event', event);

module.exports = app;
