const blogApiModel = require("../model/blogApiSchema");


const postBlogApiData = async (req, res) => {
  try {
    let data = req.body;

    console.log(data);

    console.log(req.file);
    data.image = req.file.filename;

    let result = await blogApiModel.create(data);

    res.status(201).json({
      status: true,
      msg: "data cteated !",
      result: result,
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

const getBlogApiData = async (req, res) => {
  try {
    let result = await blogApiModel.find();
    res.status(200).json({
      status: true,
      msg: "data find!",
      result: result,
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

const updateBlogApiData = async (req, res) => {
  try {
    let data = req.body;

    data.image = req.file.filename;

    await blogApiModel.findByIdAndUpdate(req.params._id, data);

    res.status(200).json({
      status: true,
      msg: "data update!",
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

const deleteBlogApi = async (req, res) => {
  try {
    await blogApiModel.findByIdAndDelete(req.params._id);
    res.status(200).json({
      status: true,
      msg: "data delete!",
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

module.exports = {
  postBlogApiData,
  getBlogApiData,
  updateBlogApiData,
  deleteBlogApi,
};
