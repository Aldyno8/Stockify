const express = require("express")
const productController = require("../controllers/product-controller")
const router = express.Router()

router.post("/api/product/add", productController.addProduct);
router.put("/api/product/update/:id", productController.updateProduct);
router.delete("/api/product/delete/:id", productController.deleteProduct);
router.get("/api/product/getAll", productController.getAllProduct);
router.get("/api/product/getOne/:id", productController.getOneProduct);

module.exports = router;