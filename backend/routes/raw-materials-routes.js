const express = require("express")
const rawMaterialController = require("../controllers/raw-materials-controller")
const router = express.Router();


router.post("/api/material/add", rawMaterialController.addRawMaterial);
router.put("/api/material/update/:id", rawMaterialController.updateRawMaterial);
router.delete("/api/material/delete/:id", rawMaterialController.deleteRawMaterial);
router.get("/api/material/getAll", rawMaterialController.getAllRawMaterial);
router.get("/api/material/getOne/:id", rawMaterialController.getOneRawMaterial);

module.exports = router;