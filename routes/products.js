import { Router } from "express";
import { createProduct,getProducts, getProductById,  updateProduct, deleteProduct } from "../controllers/products.js";
import { createProductValidator, updateProductValidator } from "../validators/products.js";
import { verifyToken } from "../validators/authJwt.js";

const router = Router();

router.get('/', getProducts);

router.get('/:id', getProductById);

router.post('/', verifyToken, createProductValidator, createProduct);

router.put('/:id', verifyToken, updateProductValidator, updateProduct);

router.delete('/:id', verifyToken, deleteProduct);
deleteProduct
export { router };