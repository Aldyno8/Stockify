const mongoose = require('mongoose');

const rawMaterialShema = mongoose.Schema({
	name: {type: String, required:true},
	quantity: {type: Number, required:true},
	unity: {type: String, required:true},
	update_date: {type: Date, required:true},
})

module.exports = mongoose.model('RawMaterial', rawMaterialShema)