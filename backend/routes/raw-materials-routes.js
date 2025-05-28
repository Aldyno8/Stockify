const express = require("express")
const rawMaterialController = require("../controllers/raw-materials-controller")
const router = express.Router();


router.post("/api/material/add", rawMaterialController.addRawMaterial);
router.post("/api/material/update", rawMaterialController.updateRawMaterial);
router.post("/api/material/delete", rawMaterialController.deleteRawMaterial);
router.get("/api/material/getAll", rawMaterialController.getAllRawMaterial);
router.get("/api/material/getOne", rawMaterialController.getOneRawMaterial);

module.exports = router;