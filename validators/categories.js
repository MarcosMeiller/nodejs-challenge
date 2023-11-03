import { check } from "express-validator";
import { validateResults } from "../helpers/handleValidators.js";

export const createCategoryValidator = [
  check("name").exists().notEmpty().isLength({ min: 5, max: 50 }),
  check("description").exists().notEmpty().isLength({ min: 5, max: 200 }),
  (req, res, next) => validateResults(req, res, next)
];


export const updateCategoryValidator = [
  check("name").exists().notEmpty().isLength({ min: 5, max: 50 }),
  check("description").exists().notEmpty().isLength({ min: 5, max: 200 }),
  (req, res, next) => validateResults(req, res, next)
];


