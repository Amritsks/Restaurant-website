import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// Create new order
router.post("/", async (req, res) => {
  try {
    const { customerName, email, phone, deliveryAddress, items, totalAmount } = req.body;

    // Validate required fields
    if (!customerName || !email || !phone || !deliveryAddress || !items || !totalAmount) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Validate items array
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Order must contain at least one item." });
    }

    const newOrder = new Order({
      customerName,
      email,
      phone,
      deliveryAddress,
      items,
      totalAmount
    });

    await newOrder.save();
    
    res.status(201).json({ 
      message: "Order placed successfully! 🎉", 
      orderId: newOrder._id,
      estimatedDelivery: newOrder.estimatedDelivery
    });
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ message: "Server error while placing order." });
  }
});

// Get all orders (for admin purposes)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ orderDate: -1 });
    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ message: "Server error while fetching orders." });
  }
});

// Get order by ID
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found." });
    }
    res.json(order);
  } catch (err) {
    console.error("Error fetching order:", err);
    res.status(500).json({ message: "Server error while fetching order." });
  }
});

export default router;