const e = require("express");
const joi = require("@hapi/joi");

// REGISTRATION VALIDATION
const registerValidationSchema = joi.object({
  phoneNumber: joi.string().min(11).max(11).required(),
  fullName: joi.string().min(4).required(),
  email: joi.string().min(6).required().email(),
  state: joi.string().min(3).required(),
  dob: joi.date().required(),
  password: joi.string().min(6),
});

// LOGIN VALIDATION
const loginValidationSchema = joi.object({
  email: joi.string().min(6).required().email(),
  password: joi.string().min(6),
});

module.exports = { registerValidationSchema, loginValidationSchema };
