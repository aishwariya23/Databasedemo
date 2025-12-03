const express = require("express");
const User = require("../models/User");//import user model
const router = express.Router();

// @desc   Create User (C)
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @desc   Get all users (R)
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// @desc   Update user by id (U)
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @desc   Delete user by id (D)
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});



module.exports = router;



