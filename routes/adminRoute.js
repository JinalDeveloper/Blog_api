var express = require("express");
var router = express.Router();

const { adminVarifyToken } = require("../middleware/adminVrifyToken");

const {
  postAdminData,
  adminLogin,
  deleteUser,
} = require("../controller/AdminController");

router.post("/admin", postAdminData);
router.get("/admin/login", adminLogin);

router.delete("/deleteUser/:_id", adminVarifyToken, deleteUser);

module.exports = router;
