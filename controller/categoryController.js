const categoryModel = require("../model/categorySchema");

const postCategoryData = async (req, res) => {
  try {
    let data = req.body;

    data.image = req.file.filename;
    let result = await categoryModel.create(data);

    res.status(200).json({
      status: true,
      msg: "data created successfully !",
      result: result,
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

const getAllCategoryData = async (req, res) => {
  try {
    let result = await categoryModel.find();

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

const updateCategoryData = async (req, res) => {
  try {
    let data = req.body;

    
    data.image = req.file.filename;

    await categoryModel.findByIdAndUpdate(req.params._id, data);

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

const deleteUserData = async (req, res) => {
  try {
    await categoryModel.findByIdAndDelete(req.params._id);

    res.status(200).json({
      status: true,
      msg: "data deleted!",
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      msg: error.message,
    });
  }
};

module.exports = {
  postCategoryData,
  getAllCategoryData,
  updateCategoryData,
  deleteUserData,
};
