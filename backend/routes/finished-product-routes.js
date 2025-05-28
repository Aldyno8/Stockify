const express = require("express")
const finishedProductController = require("../controllers/finished-product-controller")
const router = express.Router();


router.post("/api/product/add", finishedProductController.addFinishedProuct);
router.post("/api/product/update/:id", finishedProductController.updateFinishedProduct);
router.post("/api/product/delete/:id", finishedProductController.deleteFinishedProduct);
router.get("/api/product/getAll", finishedProductController.getAllFinishedProduct);
router.get("/api/product/getOne/:id", finishedProductController.getOneFinishedProduct);

module.exports = router;