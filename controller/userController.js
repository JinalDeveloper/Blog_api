const userModel = require("../model/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const postUserData = async (req, res) => {
  try {
    let data = req.body;

    if (!data.name || !data.email || !data.mobileNo || !data.password) {
      throw new Error("plz fillup all field !");
    }

    if (data.mobileNo.length < 10 || data.mobileNo.length > 10) {
      throw new Error("plz enter valid number !");
    }

    data.password = await bcrypt.hash(data.password, 10);
    let result = await userModel.create(data);
    var token = jwt.sign({ sign: result._id }, process.env.USER_TOKEN_SIGN);
    res.status(200).json({
      status: true,
      msg: "data created successfully !",
      result: result,
      token: token,
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

const userLogin = async (req, res) => {
  try {
    let checkUser = await userModel.findOne({
      $or: [{ email: req.body.username }, { mobileNo: req.body.username }],
    });

    if (!checkUser) {
      throw new Error("user not valid !");
    }

    let checkPassword = await bcrypt.compare(
      req.body.password,
      checkUser.password
    );

    if (!checkPassword) {
      throw new Error("password not valid !");
    }

    res.status(201).json({
      status: true,
      msg: "login successfully !",
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

module.exports = { postUserData, userLogin };
