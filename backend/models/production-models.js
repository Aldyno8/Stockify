const mongoose = require("mongoose");

const productionShema = mongoose.Schema({
    productName :{type:String, required:true},
    productionStart :{type:Date, require:true},
    productionEnd :{type:Date, required:true},
    rawMaterials :{type : String, required:true},
    rawMaterialsQuantity : {type:Number, required:true},
    rawquantityUnity :{type:String, required:true},
    finishedProductQuantity :{type:Number, required:true},
    FinishedQantityUnity :{type:String, required:true},
})

module.exports = mongoose.model('Production', productionShema)