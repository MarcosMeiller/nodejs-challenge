import { Router } from "express";
import { createOrderDetail,getOrderDetails, getOrderDetailById,  updateOrderDetail, deleteOrderDetail } from "../controllers/order_details.js";
import { createOrderDetailValidator, updateOrderDetailValidator } from "../validators/order_details.js";

const router = Router();

router.get('/', getOrderDetails);

router.get('/:id', getOrderDetailById);

router.post('/', createOrderDetailValidator, createOrderDetail);

router.put('/:id', updateOrderDetailValidator, updateOrderDetail);

router.delete('/:id', deleteOrderDetail);

export { router };