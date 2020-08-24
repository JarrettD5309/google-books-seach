const express = require("express");
const path = require("path");
var mongoose = require("mongoose");
var db = require("./models");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/googlebooks", { useNewUrlParser: true });

mongoose.connection.on("connected", () => console.log("Mongoose is connected")
);
// Define API routes here
app.post("/api", function(req, res) {
  db.Book.create({
    title: "This is a test2",
    authors: "Jarrett DOugherty"
  })
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
