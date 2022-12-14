const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// /admin/products => GET
router.get("/products", adminController.getProducts);

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

//edit product with queries
router.get("/edit-product/:productId", adminController.getEditProduct);

//edit product post route
router.post("/edit-product", adminController.postEditProduct);

//deleting Post only requires post route no get route
router.post("/delete-product/:productId", adminController.postDeleteProduct);

module.exports = router;
