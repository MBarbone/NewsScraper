const logger = require("morgan");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../models");

module.exports = app => {
  app.get("/", (req, res) => {
    axios.get("https://www.nytimes.com/section/technology").then(response => {
      const $ = cheerio.load(response.data);

      $("li.css-ye6x8s").each((i, element) => {
        const results = [];

        const title = $(element)
          .find("a")
          .text();

        const link = $(element)
          .find("a")
          .attr("href");

        results.push({
          title: title,
          link: link
        });

        // db.Article.create(result)
        //   .then(dbArticle => {
        //     // View the added result in the console
        //     console.log(dbArticle);
        //   })
        //   .catch(err => {
        //     // If an error occurred, log it
        //     console.log(err);
        //   });

        console.log(results);
      });
    });
  });
};
