import { check } from "express-validator";
import { validateResults } from "../helpers/handleValidators.js";

export const createOrderDetailValidator = [
  check("price").exists().notEmpty(),
  check("quantity").exists().notEmpty(),
  check("product_Id").exists().notEmpty(),
  check("order_Id").exists().notEmpty(),
  (req, res, next) => validateResults(req, res, next)
];


export const updateOrderDetailValidator = [
  check("price").exists().notEmpty(),
  check("quantity").exists().notEmpty(),
  check("product_Id").exists().notEmpty(),
  check("order_Id").exists().notEmpty(),
  (req, res, next) => validateResults(req, res, next)
];

