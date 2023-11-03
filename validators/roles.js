import { check } from "express-validator";
import { validateResults } from "../helpers/handleValidators.js";

export const createRolValidator = [
    check("name").exists().notEmpty().isLength({ min: 5, max: 50 }),
    (req, res, next) => validateResults(req, res, next)
  ];
  
  
  export const updateRolValidator = [
    check("name").exists().notEmpty().isLength({ min: 5, max: 50 }),
    (req, res, next) => validateResults(req, res, next)
  ];
  
  
  