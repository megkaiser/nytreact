var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var nytreactSchema = new Schema({
  text: String,
  favorited: {
    type: Boolean,
    default: false
  }
});
var nytreact = mongoose.model("Nytreact", nytreactSchema);
module.exports = Nytreact;