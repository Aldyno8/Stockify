const Product = require("../models/product-models");

exports.addProduct = (req, res, next) => {
  const product = new Product(req.body);

  product.save()
    .then((result) => {
      if (!result) {
        return res.status(400).json({ message: "Erreur durant l'ajout" });
      }
      res.status(201).json({ message: "Ajout reéussie" });
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ error: err });
    });
};

exports.getAllProduct = (req, res, next) => {
  Product.find()
    .then((product) => {
      if (!product) {
        return res.status(400).json({ message: "Aucun produit trouvé !" });
      }
      product.map((item, index) => {
        item.status = item.stockQuantity < item.alertThreshold ? "faible"
        : item.stockQuantity < 2 * item.alertThreshold ? "moyen"
        : "Bon"
      })
      res.status(200).json(product);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.getOneProduct = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => {
      if (!product) {
        return res
          .status(400)
          .json({ message: "Produit non trouvé" });
      }
      res.status(200).json(product);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.updateProduct = (req, res, next) => {
  const { _id, ...updatedData } = req.body;

  Product.findByIdAndUpdate(req.params.id, updatedData, { new: true })
    .then((result) => {
      if (!result) {
        return res
          .status(400)
          .json({ message: "Erreur lors de la modification" });
      }
      res.status(200).json({ message: "Modification réussie" });
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ error: err });
    });
};

exports.deleteProduct = (req, res, next) => {
  Product.deleteOne({ _id: req.params.id })
    .then((deleted) => {
      if (!deleted) {
        return res
          .status(400)
          .json({ message: "Echec de la suppression" });
      }
      res.status(200).json({ message: "Suppression réussie" });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};
