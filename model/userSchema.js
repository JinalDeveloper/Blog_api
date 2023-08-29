const mongoose = require("mongoose");   

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  mobileNo: { type: String, unique: true, require: true },
  password: { type: String, require: true },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
