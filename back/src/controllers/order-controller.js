const prisma = require("../models/db");

// Create a new order
const createOrder = async (data) => {
  return await prisma.order.create({
    data: {
      customer: {
        connect: { id: data.customerID },
      },
      orderItems: {
        create: data.orderItems.map((item) => ({
          Product: { connect: { id: item.productID } },
          subtotal: item.subtotal,
          quantity: item.quantity,
        })),
      },
      orderDate: data.orderDate,
      totalAmount: data.totalAmount,
      paymentMethod: data.paymentMethod,
    },
  });
};

// Get all orders
const getAllOrders = async () => {
  return prisma.order.findMany({
    include: {
      Customer: true,
      orderItems: {
        include: {
          Product: true,
        },
      },
      Payment: true,
    },
  });
};

// Get an order by ID
const getOrderById = async (id) => {
  return prisma.order.findUnique({
    where: {
      id,
    },
    include: {
      Customer: true,
      orderItems: {
        include: {
          Product: true,
        },
      },
      Payment: true,
    },
  });
};

// Update an order by ID
const updateOrderById = async (id, data) => {
  return prisma.order.update({
    where: {
      id,
    },
    data: {
      customer: {
        connect: { id: data.customerID },
      },
      orderItems: {
        upsert: data.orderItems.map((item) => ({
          where: { id: item.id },
          update: {
            Product: { connect: { id: item.productID } },
            subtotal: item.subtotal,
            quantity: item.quantity,
          },
          create: {
            Product: { connect: { id: item.productID } },
            subtotal: item.subtotal,
            quantity: item.quantity,
          },
        })),
      },
      orderDate: data.orderDate,
      totalAmount: data.totalAmount,
      paymentMethod: data.paymentMethod,
    },
  });
};

// Delete an order by ID
const deleteOrderById = async (id) => {
  return prisma.order.delete({
    where: {
      id,
    },
  });
};

// Get all orders from a user
const getOrdersByCustomerId = async (customerId) => {
  return prisma.order.findMany({
    where: {
      customerID: customerId,
    },
    include: {
      orderItems: {
        include: {
          Product: true,
        },
      },
      Payment: true,
    },
  });
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderById,
  deleteOrderById,
  getOrdersByCustomerId,
};
