// payment-controller.js
const prisma = require("../models/db");

// Create a new payment
const createPayment = async (data) => {
  return prisma.payment.create({
    data,
  });
};

// Get all payments
const getAllPayments = async () => {
  return prisma.payment.findMany();
};

// Get a payment by ID
const getPaymentById = async (id) => {
  return prisma.payment.findUnique({
    where: {
      id,
    },
  });
};

// Update a payment by ID
const updatePaymentById = async (id, data) => {
  return prisma.payment.update({
    where: {
      id,
    },
    data,
  });
};

// Delete a payment by ID
const deletePaymentById = async (id) => {
  return prisma.payment.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePaymentById,
  deletePaymentById,
};
