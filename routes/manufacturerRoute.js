const express = require("express");
const {
  createManufacturer,
  updateManufacturer,
  deleteManufacturer,
  getManufacturer,
  getallManufacturer,
} = require("../controller/manufacturerCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createManufacturer);
router.put("/:id", authMiddleware, isAdmin, updateManufacturer);
router.delete("/:id", authMiddleware, isAdmin, deleteManufacturer);
router.get("/:id", getManufacturer);
router.get("/", getallManufacturer);

module.exports = router;
