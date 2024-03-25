// payment-routes.js
const express = require("express");
const router = express.Router();
const paymentService = require("../controllers/payment-controller");

// Create a new payment
router.post("/payments", async (req, res) => {
  try {
    const data = req.body;
    const newPayment = await paymentService.createPayment(data);
    res.json(newPayment);
  } catch (error) {
    console.error("Error creating payment:", error.message);
    res.status(500).json({ error: "Error creating payment", message: error.message });
  }
});

// Get all payments
router.get("/all", async (req, res) => {
  try {
    const payments = await paymentService.getAllPayments();
    res.json(payments);
  } catch (error) {
    console.error("Error getting payments:", error.message);
    res.status(500).json({ error: "Error getting payments", message: error.message });
  }
});

// Get a payment by ID
router.get("/:id", async (req, res) => {
  const paymentId = parseInt(req.params.id, 10);

  try {
    const payment = await paymentService.getPaymentById(paymentId);

    if (!payment) {
      res.status(404).json({ error: "Payment not found" });
      return;
    }

    res.json(payment);
  } catch (error) {
    console.error("Error getting payment:", error.message);
    res.status(500).json({ error: "Error getting payment", message: error.message });
  }
});

// Update a payment by ID
router.put("/:id", async (req, res) => {
  const paymentId = parseInt(req.params.id, 10);

  try {
    const updatedPayment = await paymentService.updatePaymentById(paymentId, req.body);

    if (!updatedPayment) {
      res.status(404).json({ error: "Payment not found" });
      return;
    }

    res.json(updatedPayment);
  } catch (error) {
    console.error("Error updating payment:", error.message);
    res.status(500).json({ error: "Error updating payment", message: error.message });
  }
});

// Delete a payment by ID
router.delete("/:id", async (req, res) => {
  const paymentId = parseInt(req.params.id, 10);

  try {
    const deletedPayment = await paymentService.deletePaymentById(paymentId);

    if (!deletedPayment) {
      res.status(404).json({ error: "Payment not found" });
      return;
    }

    res.json(deletedPayment);
  } catch (error) {
    console.error("Error deleting payment:", error.message);
    res.status(500).json({ error: "Error deleting payment", message: error.message });
  }
});

module.exports = router;
