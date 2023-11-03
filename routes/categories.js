import { Router } from "express";
import { createCategory,getCategories, getCategoryById,  updateCategory, deleteCategory } from "../controllers/categories.js";
import { createCategoryValidator, updateCategoryValidator } from "../validators/categories.js";
import { verifyToken } from "../validators/authJwt.js";

const router = Router();

router.get('/', getCategories);

router.get('/:id', getCategoryById);

router.post('/', verifyToken, createCategoryValidator, createCategory);

router.put('/:id',verifyToken, updateCategoryValidator, updateCategory);

router.delete('/:id', verifyToken, deleteCategory);

export { router };