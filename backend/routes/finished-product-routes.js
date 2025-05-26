const express = require("express")
const finishedProductController = require("../controllers/finished-product-controller")
const router = express.Router();


router.post("api/finished-product/add", finishedProductController.addFinishedProduct);
router.post("api/finished-product/update/:id", finishedProductController.updateFinishedProduct);
router.post("api/finished-product/delete/:id", finishedProductController.deleteFinishedProduct);
router.get("api/finished-product/getAll", finishedProductController.getAllFinishedProduct);
router.get("api/finished-product/getOne/:id", finishedProductController.getOneRawMaterial);
