const express = require("express");
const exphbs = require("express-handlebars");
const logger = require("morgan");
// mongoose connection
const db = require("./db/connection");
const axios = require("axios");
const cheerio = require("cheerio");
const logger = require("morgan");
const app = express();

const PORT = process.env.PORT || 5000;

// middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});
