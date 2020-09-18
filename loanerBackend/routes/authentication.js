const express = require("express");
const router = require("express").Router();
const User = require("../models/user");
const joi = require("@hapi/joi");
const {
  registerValidationSchema,
  loginValidationSchema,
} = require("../validations/validations");
const { schema } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// SIGNUP ROUTER
router.post("/register", async (req, res) => {
  const { error } = registerValidationSchema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      res.send("User email already registered");
    } else {
      // HASH PASSWORD
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const user = new User({
        phoneNumber: req.body.phoneNumber,
        fullName: req.body.fullName,
        email: req.body.email,
        state: req.body.state,
        dob: req.body.dob,
        password: hashedPassword,
      });
      try {
        // Save User to database
        const savedUser = await user.save();
        res.send(savedUser);
      } catch (error) {
        res.status(500).send(error);
      }
    }
  }
});

// LOGIN ROUTER
router.post("/login", async (req, res) => {
  const { error } = loginValidationSchema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    // CHECK IF THE USER EXIST
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      // CHECK USER PASSWORD
      const validPassword = await bcrypt.compare(
        req.body.password,
        existingUser.password
      );
      if (validPassword) {
        // ASSIGN A TOKEN TO USER
        const token = jwt.sign(
          {
            _id: existingUser._id,
            fullName: existingUser.fullName,
          },
          process.env.JWT_KEY
        );
        res
          .header("Authorization-Token", token)
          .json({ status: "success", token: token });

        // return res.send("Login Successful");
      } else {
        return res.status(400).send("Email and/or Password is wrong");
      }
    }
  }
});

// AUTHENTICATE  USER
router.get("/user", async (req, res) => {
  const token = req.header("Authorization-Token");
  if (!token) return res.status(401).send("Unauthorised resource");

  try {
    const verified = jwt.verify(token, process.env.JWT_KEY);
    res.json({ user: verified });
  } catch (error) {
    res.status(400).send("Invalid Authorization details");
  }
});

module.exports = router;
