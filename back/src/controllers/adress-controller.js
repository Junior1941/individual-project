// .js
const prisma = require("../models/db");

// Create a new ship address
const createOrEditAddress = async (data) => {
  return prisma.address.upsert({
    where: {
      id: data.id || 0,
    },
    update: data,
    create: data,
  });
};

// Get all  addresss
const getAllAddresss = async () => {
  return prisma.address.findMany();
};

// get all Addresss by user id
const getAllAddresssByUserId = async ({ userId }) => {
  return prisma.address.findMany({
    where: {
      userId,
    },
  });
};

// Get a  address by ID
const getAddressById = async (id) => {
  return prisma.address.findUnique({
    where: {
      id,
    },
  });
};

// Update a  address by ID
const updateAddressById = async (id, data) => {
  return prisma.address.update({
    where: {
      id,
    },
    data,
  });
};

// Delete a  address by ID
const deleteAddressById = async ({ id }) => {
  return await prisma.address.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  createOrEditAddress,
  getAllAddresss,
  getAddressById,
  updateAddressById,
  deleteAddressById,
  getAllAddresssByUserId,
};
