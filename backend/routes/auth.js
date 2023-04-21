const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const User = require("../models/user");

const router = express.Router();

router.post(
  "/login",
  function (req, res, next) {
    if (req.isAuthenticated()) {
      return res.status(400).json({ message: "You are already logged in" });
    }
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    res.json({ message: "Login successful" });
  }
);

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username: username,
      password: hashedPassword,
    });
    await newUser.save();
    res.json({ message: "Registration successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/logout", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "User is not logged in" });
  }

  req.logout(function (err) {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.json({ message: "Logout successful" });
    }
  });
});

module.exports = router;
