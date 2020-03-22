const express = require("express");
const bodyParser = require("body-parser");

// --------------CONTROLLERS---------------------
const t9responder = require('./controllers/t9responder');

// --------------SETUP---------------------
const app = express();
app.use(bodyParser.json());

// --------------ROUTES---------------------
app.get('/', (req, res) => {t9responder.dummyResponse(req, res)});
app.get('/test', (req, res) => {res.send('kiwi api running')})

app.listen(process.env.PORT || 3001);