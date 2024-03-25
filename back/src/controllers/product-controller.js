// .js
const prisma = require("../models/db");

// Create a new product
const createProduct = async (data) => {
  data.price = parseFloat(data.price);
  data.stock = parseInt(data.stock);
  data.id = parseInt(data.id);

  return prisma.product.upsert({
    where: {
      id: data.id || 0,
    },
    update: {
      name: data?.name,
      brand: data?.brand,
      category: data?.category,
      size: data?.size,
      color: data?.color,
      price: data?.price,
      stock: data?.stock,
      description: data?.description,
      productImg: data?.productImg,
    },
    create: {
      name: data.name,
      brand: data.brand,
      category: data.category,
      size: data.size,
      color: data.color,
      price: data.price,
      stock: data.stock,
      description: data.description,
      productImg: data.productImg 
    },
  });  
};

// Get all products
const getAllProducts = async () => {
  return prisma.product.findMany();
};

// Get a product by ID
const getProductById = async (id) => {
  return prisma.product.findUnique({
    where: {
      id,
    },
  });
};

// Update a product by ID
const updateProductById = async (id, data) => {
  return prisma.product.update({
    where: {
      id,
    },
    data,
  });
};

// Delete a product by ID
const deleteProductById = async (id) => {
  return prisma.product.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
