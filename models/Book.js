var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {
        type: String,
        unqiue: true
    },
    authors: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
});

// This creates our model from the above schema, using mongoose's model method
var Book = mongoose.model("Book", BookSchema);

// Export the Article model
module.exports = Book;