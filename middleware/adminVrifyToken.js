const jwt = require("jsonwebtoken");
require("dotenv").config();

const adminVarifyToken = async (req, res, next) => {
  try {
    let token = req.headers.token;

    if (!token) {
      throw new Error("token required !");
    }

    var decoded = jwt.verify(token, process.env.ADMIN_TOKEN_SIGN);

    AdminTokenId = decoded.sign;
    next();
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

module.exports = { adminVarifyToken };
