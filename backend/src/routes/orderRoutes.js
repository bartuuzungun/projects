import express from "express";
import { auth, admin } from "../middleware/auth.js";
import {
  createOrder,
  getOrderById,
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";

const router = express.Router();

// User routes
router.post("/", auth, createOrder);
router.get("/my-orders", auth, getUserOrders);
router.get("/:id", auth, getOrderById);

// Admin routes
router.get("/", auth, admin, getAllOrders);
router.put("/:id/status", auth, admin, updateOrderStatus);

module.exports = router;
