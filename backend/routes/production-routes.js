const express = reauire("express")
const productionController = require("../controllers/production-controller")
const Router = express.Router()

router.post("api/production/", productionController.produce);