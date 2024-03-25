const express = require("express");
const router = express.Router();
const orderService = require("../controllers/order-controller");
const { removeorderItems } = require("../controllers/cart-controller");
const paymentService = require("../controllers/payment-controller");

// Create a new order
router.post("/new", async (req, res) => {
  const data = req.body;
  try {
    const newOrder = await orderService.createOrder({
      customerID: data.userId,
      orderDate: new Date(),
      totalAmount: 0, // You may need to calculate the total amount based on orderDetails
      paymentMethod: data.paymentMethod,
      orderItems: data.items.map((item) => ({
        productID: item.product.id,
        subtotal: item.quantity * item.product.price,
        quantity: item.quantity,
      })),
    });

    const { id: orderId } = newOrder;

    const payment = await paymentService.createPayment({
      orderId,
      amount: newOrder.totalAmount,
    });

    await removeorderItems(
      data.shoppingCartId,
      data.items.map((item) => item.product.id)
    );

    res.json({ ...newOrder, paymentId: payment.id });
  } catch (error) {
    console.error("Error creating order:", error.message);
    res.status(500).json({ error: "Error creating order", message: error.message });
  }
});

// Get all orders
router.get("/all", async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Error getting orders", message: error.message });
  }
});

// Get an order by ID
router.get("/:id", async (req, res) => {
  const orderId = parseInt(req.params.id, 10);

  try {
    const order = await orderService.getOrderById(orderId);

    if (!order) {
      res.status(404).json({ error: "Order not found" });
      return;
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Error getting order", message: error.message });
  }
});

// Update an order by ID
router.put("/update/:id", async (req, res) => {
  const orderId = parseInt(req.params.id, 10);

  try {
    const updatedOrder = await orderService.updateOrderById(orderId, req.body);

    if (!updatedOrder) {
      res.status(404).json({ error: "Order not found" });
      return;
    }

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: "Error updating order" });
  }
});

// Delete an order by ID
router.delete("/delete/:id", async (req, res) => {
  const orderId = parseInt(req.params.id, 10);

  try {
    const deletedOrder = await orderService.deleteOrderById(orderId);

    if (!deletedOrder) {
      res.status(404).json({ error: "Order not found" });
      return;
    }

    res.json(deletedOrder);
  } catch (error) {
    res.status(500).json({ error: "Error deleting order" });
  }
});

// Get all orders from a user
router.get("/user/:id", async (req, res) => {
  const userId = parseInt(req.params.id, 10);

  try {
    const orders = await orderService.getOrdersByCustomerId(userId);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Error getting orders" });
  }
});

module.exports = router;
