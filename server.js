const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./db/connection");

const app = express();

const PORT = process.env.PORT || 5000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});
