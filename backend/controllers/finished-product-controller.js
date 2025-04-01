const FinishedProduct = require("../models/finished-product-models");

exports.addFinishedProuct = (req, res, next) => {
	const finishedPrduct = new FinishedProduct({
		name: req.body.name,
		quantity: req.body.quantity,
		unity: req.body.unity,
		update_date: req.body.update_date,
	})
	finishedPrduct.save()
	.then((result) => {
		if(!result){
			res.status(400).json({ message: "Produits fini non ajoutée!" });
		}
		res.status(201).json({ message: "Produits fini ajoutée!" });	
	})
	.catch((err) => {
		res.status(500).json({ error: err });
	});
};

exports.getAllFinishedProduct = (req, res, next) => {
	FinishedProduct.find()
	.then((product) => {
		if(!product){
			res.status(400).json({ message: "Produits fini non trouvées!" });
		}
		res.status(200).json(product);
	})
	.catch((err) => {
		res.status(500).json({ error: err });
	});
};

exports.getOneFinishedProduct = (req, res, next) => {
	FinishedProduct.findOne({_id: req.params.id})
	.then((product) => {
		if(!product){
			res.status(400).json({ message: "Produits fini non trouvée!" });
		}
		res.status(200).json(product);
	})
	.catch((err) => {
		res.status(500).json({ error: err });
	});
};

exports.updateFinishedProduct = (req, res, next) => {
	const rawMaterial = new FinishedProduct({
		_id: req.params.id,
		name: req.body.name,
		quantity: req.body.quantity,
		unity: req.body.unity,
		update_date: req.body.update_date,
	})
	FinishedProduct.updateOne({_id: req.params.id}, rawMaterial)
	.then((result) => {
		if(!result){
			res.status(400).json({ message: "Produits fini non modifiée!" });
		}
		res.status(200).json({ message: "Produits fini mis a jour!" });
	})
	.catch((err) => {
		res.status(500).json({ error: err });
	});
};

exports.deleteFinishedProduct = (req, res, next) => {
	FinishedProduct.deleteOne({_id:req.params.id})
	.then((deleted) => {
		if(!deleted){
			res.status(400).json({message: "Echec de la suppression du produit"})
		}
		res.status(200).json({message:"produit supprimé avec succès"})
	})
	.catch(error => {
		res.status(500).json({error: error})
	})
};