const express = reauire("express")
const productionController = require("../controllers/production-controller")
const router = express.Router()

router.post("/api/production/", productionController.produce);

module.exports = router;