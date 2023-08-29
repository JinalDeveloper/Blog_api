var express = require("express");
var router = express.Router();
const upload = require("../Multer");

const { adminVarifyToken } = require("../middleware/adminVrifyToken");

const {
  postCategoryData,
  getAllCategoryData,
  updateCategoryData,
  deleteUserData,
} = require("../controller/categoryController");

router.post(
  "/category",
  upload.single("image"),
  adminVarifyToken,
  postCategoryData
);

router.get("/getAllData", getAllCategoryData);

router.put(
  "/updateCategory/:_id",
  upload.single("image"),
  adminVarifyToken,
  updateCategoryData
);

router.delete("/deleteCategory/:_id", adminVarifyToken, deleteUserData);
module.exports = router;
