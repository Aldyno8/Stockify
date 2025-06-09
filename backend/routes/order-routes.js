const express = require("express")
const orderController = require("../controllers/order-controller")
const router = express.Router()

router.post("/api/order/add", orderController.addOrder);
router.put("/api/order/update/:id", orderController.updateOneOrder);
router.delete("/api/order/delete/:id", orderController.deleteOneOrder);
router.get("/api/order/getAll", orderController.getAllOrder);
router.get("/api/order/getOne/:id", orderController.getOneOrder);

module.exports = router;