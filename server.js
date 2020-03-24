const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// --------------CONTROLLERS---------------------
const t9responder = require("./controllers/t9responder");

// --------------SETUP---------------------
const app = express();
app.use(bodyParser.json());
app.use(cors());

// --------------ROUTES---------------------
app.get("/", (req, res) => {
  t9responder.wordResponder(req, res);
});

app.listen(process.env.PORT || 3001);
