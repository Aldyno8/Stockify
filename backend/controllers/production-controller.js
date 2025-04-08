const { raw } = require("express")
const Production = require("../models/production-models")
const RawMaterial = require("../models/raw-materials-models")
const { name } = require("../app")

exports.produce = (req, res, next) => {
    const production = new Production({
        productName: req.body.productName,
        productionStart: req.body.productionStart,
        productionEnd: req.body.productionEnd,
        rawMaterials: req.body.rawMaterials,
        rawMaterialsQuantity: req.body.rawMaterialsQuantity,
        rawquantityUnity: req.body.rawquantityUnity,
        finishedProductQuantity: req.body.finishedProductQuantity,
        FinishedQantityUnity: req.body.FinishedQantityUnity
    })
}