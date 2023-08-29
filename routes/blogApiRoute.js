var express = require("express");
var router = express.Router();
const upload = require("../Multer");

const {
  postBlogApiData,
  getBlogApiData,
  updateBlogApiData,
  deleteBlogApi,
} = require("../controller/BlogApiController");

const { adminVarifyToken } = require("../middleware/adminVrifyToken");

router.post(
  "/blogApi",
  upload.single("image"),
  adminVarifyToken,
  postBlogApiData
);

router.get("/getBlogApiData", getBlogApiData);

router.put(
  "/updateBlogApi/:_id",
  upload.single("image"),
  adminVarifyToken,
  updateBlogApiData
);

router.delete("/deleteBlogApi/:_id", adminVarifyToken, deleteBlogApi);
module.exports = router;
