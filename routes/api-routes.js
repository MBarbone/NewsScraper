const logger = require("morgan");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../models");

module.exports = app => {
  app.get("/scrape", (req, res) => {
    axios.get("https://www.nytimes.com/section/technology").then(response => {
      const $ = cheerio.load(response.data);

      $("li.css-ye6x8s").each((i, element) => {
        let results = [];

        const title = $(element).text();

        const link = $(element)
          .find("a")
          .attr("href");

        results.push({
          title: title,
          link: link
        });

        results
          ? db.Article.create(results) && console.log("Articles Inserted")
          : console.log(err);
      });
    });
  });

  app.get("/articles", (req, res) => {
    db.Article.find({})
      .then(dbArticle => {
        res.json(dbArticle);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/articles/:id", (req, res) => {
    db.Article.findOne({ _id: req.params.id })
      .populate("note")
      .then(dbArticle => {
        res.json(dbArticle);
      })
      .catch(err => {
        res.json(err);
      });
  });
};
