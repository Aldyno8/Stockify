const express = require("express")
const rawMaterialController = require("../controllers/raw-materials-controller")
const router = express.Router();


router.post("api/raw-material/add", rawMaterialController.addRawMaterial);
router.post("api/raw-material/update", rawMaterialController.updateRawMaterial);
router.post("api/raw-material/delete", rawMaterialController.deleteRawMateiral);
router.get("api/raw-mateeial/getAll", rawMaterialController.getAllRawMaterial);
router.get("api/raw-mateeial/getOne", rawMaterialController.getOneRawMaterial);

