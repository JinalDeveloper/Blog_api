const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, require: true },
  image: String,
});

const categoryModel = mongoose.model("category", categorySchema);

module.exports = categoryModel;
