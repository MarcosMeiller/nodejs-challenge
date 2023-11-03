import { check } from "express-validator";
import { validateResults } from "../helpers/handleValidators.js";

export const createProductValidator = [
  check("name").exists().notEmpty().isLength({ min: 5, max: 50 }),
  check("description").exists().notEmpty().isLength({ min: 5, max: 200 }),
  check("url_image").optional(),
  check("categorie_Id").exists().notEmpty(),
  check("stock").exists().notEmpty(),
  check("price").exists().notEmpty(),
  (req, res, next) => validateResults(req, res, next)
];


export const updateProductValidator = [
  check("name").optional().isLength({ min: 5, max: 50 }),
  check("description").optional().notEmpty().isLength({ min: 5, max: 200 }),
  check("url_image").optional().notEmpty(),
  check("categorie_Id").optional().notEmpty(),
  check("stock").optional().notEmpty(),
  check("price").optional().notEmpty(),
  (req, res, next) => validateResults(req, res, next)
];


