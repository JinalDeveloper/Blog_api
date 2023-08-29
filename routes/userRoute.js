var express = require("express");
var router = express.Router();

const { postUserData, userLogin } = require("../controller/userController");

router.post("/user", postUserData);
router.get("/user/login", userLogin);

module.exports = router;
