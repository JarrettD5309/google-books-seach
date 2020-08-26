const express = require("express");
const path = require("path");
var mongoose = require("mongoose");
var axios = require("axios");
var db = require("./models");
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const MONGODB_URI = process.env.mongodburi;
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

mongoose.connection.on("connected", () => console.log("Mongoose is connected")
);
// Define API routes here

// google book search
app.get("/api/booksearch", function (req, res) {
  
  
  var searchURL = "https://www.googleapis.com/books/v1/volumes?q=" + req.query.q + "&projection=lite&key=" + process.env.apiKey;

  axios.get(searchURL).then(function (result) {
    var bookArr = [];

      for (var i = 0; i < 5; i++) {
        var bookID = result.data.items[i].id;
        var bookTitle = result.data.items[i].volumeInfo.title;
        var authorArr = result.data.items[i].volumeInfo.authors;
        var authors = authorArr.join(", ");
        var bookImage = result.data.items[i].volumeInfo.imageLinks.thumbnail;
        var bookDescription = result.data.items[i].volumeInfo.description;
        var bookLink = result.data.items[i].volumeInfo.infoLink;

        var bookObj = {
          id: bookID,
          title: bookTitle,
          author: authors,
          image: bookImage,
          description: bookDescription,
          infoLink: bookLink
        };

        bookArr.push(bookObj);

      };
      res.json(bookArr);
  });
});

app.post("/api", function(req, res) {
  db.Book.create(req.body)
    .then(result=>res.json(result))
    .catch (err=>res.json(err))
});
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
