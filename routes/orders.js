import { Router } from "express";
import { createOrder,getOrders, getOrderById,  updateOrder, deleteOrder } from "../controllers/orders.js";
import { createOrderValidator, updateOrderValidator } from "../validators/orders.js";
import { verifyToken } from "../validators/authJwt.js";

const router = Router();

router.get('/', getOrders);

router.get('/:id', getOrderById);

router.post('/', verifyToken, createOrderValidator, createOrder);

router.put('/:id',verifyToken, updateOrderValidator, updateOrder);

router.delete('/:id',verifyToken, deleteOrder);

export { router };