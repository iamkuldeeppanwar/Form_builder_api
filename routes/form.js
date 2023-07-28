const express = require("express");
const router = new express.Router();
const {
  createForm,
  getForm,
  getSingleForm,
  deleteSingleForm,
} = require("../controller/formController");

console.log("");

router.post("/forms", createForm);
router.get("/getForm", getForm);
router.get("/getSingleForm/:id", getSingleForm);
router.delete("/deleteForm/:id", deleteSingleForm);

module.exports = router;
