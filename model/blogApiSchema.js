const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  title: { type: String },
  discription: { type: String },
  image: String,
});

const blogApiModel = mongoose.model("blog", blogSchema);

module.exports = blogApiModel;
