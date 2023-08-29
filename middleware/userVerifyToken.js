const jwt = require("jsonwebtoken");
require("dotenv").config();


const userVarifyToken = async (req, res, next) => {
  try {
    let token = req.headers.token;

    if (!token) {
      throw new Error("token required !");
    }

    var decoded = jwt.verify(token, process.env.USER_TOKEN_SIGN);

    UserTokenId = decoded.sign;
    next();
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

module.exports = { userVarifyToken };
