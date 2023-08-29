const mongoose = require("mongoose");   

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  mobileNo: { type: String, unique: true, require: true },
  password: { type: String, require: true },
});

const adminModel = mongoose.model("admin", adminSchema);

module.exports = adminModel;
