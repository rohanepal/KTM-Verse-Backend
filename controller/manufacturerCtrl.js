const Manufacturer = require("../models/manufacturerModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createManufacturer = asyncHandler(async (req, res) => {
  try {
    const newManufacturer = await Manufacturer.create(req.body);
    res.json(newManufacturer);
  } catch (error) {
    throw new Error(error);
  }
});
const updateManufacturer = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedManufacturer = await Manufacturer.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedManufacturer);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteManufacturer = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedManufacturer = await Manufacturer.findByIdAndDelete(id);
    res.json(deletedManufacturer);
  } catch (error) {
    throw new Error(error);
  }
});
const getManufacturer = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaManufacturer = await Manufacturer.findById(id);
    res.json(getaManufacturer);
  } catch (error) {
    throw new Error(error);
  }
});
const getallManufacturer = asyncHandler(async (req, res) => {
  try {
    const getallManufacturer = await Manufacturer.find();
    res.json(getallManufacturer);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createManufacturer,
  updateManufacturer,
  deleteManufacturer,
  getManufacturer,
  getallManufacturer,
};
