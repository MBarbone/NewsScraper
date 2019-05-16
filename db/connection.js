const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/newsScraper", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"));
mongoose.set("useCreateIndex", true);
