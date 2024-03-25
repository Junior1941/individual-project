const prisma = require("../models/db");

// Create a new user
const createUser = async (data) => {
  return prisma.customer.create({
    data,
  });
};

// Get all users
const getAllUsers = async () => {
  return prisma.customer.findMany({
    where: {
      userType: "CUSTOMER",
    },
  });
};

// Get all admins
const getAllAdmins = async () => {
  return prisma.customer.findMany({
    where: {
      userType: "ADMIN",
    },
  });
};

// Get a user by ID
const getUserById = async (id) => {
  return prisma.customer.findUnique({
    where: {
      id,
    },
  });
};

// Get a user by username
const getUserByUsername = async (username) => {
  return await prisma.customer.findUnique({
    where: {
      username,
    },
  });
};

// Update a user by ID
const updateUserById = async (id, data) => {
  return prisma.customer.update({
    where: {
      id,
    },
    data,
  });
};

// Delete a user by ID
const deleteUserById = async (id) => {
  return prisma.customer.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  getUserByUsername,
  getAllAdmins,
};
