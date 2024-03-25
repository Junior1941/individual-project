// .js
const prisma = require("../models/db");

// Create a new cart
const createCart = async (data) => {
  return await prisma.orderItem.create({
    data,
  });
};

// Get all carts
const getAllCarts = async () => {
  return prisma.orderItem.findMany();
};

// Get a cart by ID
const getCartById = async (id) => {
  return prisma.orderItem.findUnique({
    where: {
      id,
    },
    select: {
      orderItem: {
        select: {
          quantity: true,
          product: {
            select: {
              id: true,
              name: true,
              price: true,
              productImg: true,
              size: true,
              color: true,
              category: true,
            },
          },
        },
      },
    },
  });
};

const getCartByUserId = async (customerID) => {
  const orderItem = await prisma.orderItem.findFirst({
    where: {
        customerID: customerID,
    },
  });
  return orderItem;
};

// Update a cart by ID
const updateCartById = async (id, data) => {
  return prisma.orderItem.update({
    where: {
      id,
    },
    data,
  });
};

const addCartItemByCartId = async (data) => {
  const { productId, orderItemId, quantity } = data;
  const item = await prisma.orderItem.upsert({
    where: {
      productId_orderItemId: { productId, orderItemId },
    },
    update: {
      quantity: {
        increment: quantity,
      },
    },
    create: data,
  });
  return item;
};

//removeorderItem
const removeorderItem = async (data) => {
  const { productId, orderItemId } = data;
  return await prisma.orderItem.delete({
    where: {
      productId_orderItemId: { productId, orderItemId },
    },
  });
};

const removeorderItems = async (orderItemId, data) => {
  return await prisma.orderItem.deleteMany({
    where: {
      orderItemId: {
        equals: orderItemId,
      },
      productId: {
        in: data,
      },
    },
  });
};

prisma.orderItem.deleteMany;

// Delete a cart by ID
const deleteCartById = async (id) => {
  return prisma.orderItem.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  createCart,
  getAllCarts,
  getCartById,
  updateCartById,
  deleteCartById,
  getCartByUserId,
  addCartItemByCartId,
  removeorderItem,
  removeorderItems,
};