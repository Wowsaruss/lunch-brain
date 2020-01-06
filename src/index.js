const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { slashCommands, event, interactiveComponent } = require('./lib');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/lunch-order', slashCommands);
app.post('/lunch-event', event);
app.post('/interactive-component', interactiveComponent);

module.exports = app;
