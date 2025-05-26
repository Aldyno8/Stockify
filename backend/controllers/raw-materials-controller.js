const RawMaterial = require("../models/raw-materials-models");

exports.addRawMaterial = (req, res, next) => {
	const rawMaterial = new RawMaterial({
		name: req.body.name,
		quantity: req.body.quantity,
		unity: req.body.unity,
		update_date: req.body.update_date,
	})
	rawMaterial.save()
	.then((result) => {
		if(!result){
			return res.status(400).json({ message: "Matières premières non ajoutée!" });
		}
		res.status(201).json({ message: "Matières premières ajoutée!" });	
	})
	.catch((err) => {
		res.status(500).json({ error: err });
	});
};

exports.getAllRawMaterial = (req, res, next) => {
	RawMaterial.find()
	.then((material) => {
		if(!material){
			return res.status(400).json({ message: "Matières premières non trouvées!" });
		}
		res.status(200).json(material);
	})
	.catch((err) => {
		res.status(500).json({ error: err });
	});
};

exports.getOneRawMaterial = (req, res, next) => {
	RawMaterial.findOne({_id: req.params.id})
	.then((material) => {
		if(!material){
			return res.status(400).json({ message: "Matières premières non trouvée!" });
		}
		res.status(200).json(material);
	})
	.catch((err) => {
		res.status(500).json({ error: err });
	});
};

exports.updateRawMaterial = (req, res, next) => {
	const rawMaterial = new RawMaterial({
		_id: req.params.id,
		name: req.body.name,
		quantity: req.body.quantity,
		unity: req.body.unity,
		update_date: req.body.update_date,
	})
	RawMaterial.updateOne({_id: req.params.id}, rawMaterial)
	.then((result) => {
		if(!result){
			return res.status(400).json({ message: "Matières premières non modifiée!" });
		}
		res.status(200).json({ message: "Matières premières mis a jour!" });
	})
	.catch((err) => {
		res.status(500).json({ error: err });
	});
};

exports.deleteRawMaterial = (req, res, next) => {
	RawMaterial.deleteOne({_id:req.params.id})
	.then((deleted) => {
		if(!deleted){
			return res.status(400).json({message: "Echec de la suppression de la Matières"})
		}
		res.status(200).json({message:"Matières supprimé avec succès"})
	})
	.catch(error => {
		res.status(500).json({error: error})
	})
};