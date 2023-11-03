import { check } from "express-validator";
import { validateResults } from "../helpers/handleValidators.js";

export const createOrderValidator = [
  check("customer_Id").exists().notEmpty(),
  check("ammount").exists().notEmpty(),
  (req, res, next) => validateResults(req, res, next)
];


export const updateOrderValidator = [
    check("customer_Id").exists().notEmpty(),
    check("ammount").exists().notEmpty(),
  (req, res, next) => validateResults(req, res, next)
];
