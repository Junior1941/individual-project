// Address.routes.js
const express = require("express");
const router = express.Router();
const AddressService = require("../controllers/adress-controller");

// Create a new Address
router.post("/new", async (req, res) => {
  try {
    const newAddress = await AddressService.createOrEditAddress(
      req.body
    );
    res.json(newAddress);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Error creating Address", message: error.message });
  }
});

// Get all Addresss
router.get("/all", async (req, res) => {
  try {
    const Addresss = await AddressService.getAllAddresss();
    res.json(Addresss);
  } catch (error) {
    res.status(500).json({ error: "Error getting Addresss" });
  }
});

// get all Addresss by user id
router.get("/allbyuserid", async (req, res) => {
  try {
    const Addresss = await AddressService.getAllAddresssByUserId(
      req.body
    );
    res.json(Addresss);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error getting Addresss", message: error.message });
  }
});

// Get a Address by ID
router.get("/get", async (req, res) => {
  try {
    const Address = await AddressService.getAddressById(req.body);

    if (!Address) {
      res.status(404).json({ error: "Address not found" });
      return;
    }

    res.json(Address);
  } catch (error) {
    res.status(500).json({ error: "Error getting Address" });
  }
});

// Update a Address by ID
router.put("/update", async (req, res) => {
  try {
    const updatedAddress = await AddressService.updateAddressById(
      req.body.id,
      req.body
    );

    if (!updatedAddress) {
      res.status(404).json({ error: "Address not found" });
      return;
    }

    res.json(updatedAddress);
  } catch (error) {
    res.status(500).json({ error: "Error updating Address" });
  }
});

// Delete a Address by ID
router.post("/delete", async (req, res) => {
  try {
    const deletedAddress = await AddressService.deleteAddressById(
      req.body
    );

    res.json(deletedAddress);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error deleting Address", message: error.message });
  }
});

module.exports = router;