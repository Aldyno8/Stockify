const Order = require("../models/order-models");
const { validationResult } = require("express-validator");

exports.addOrder = async (req, res, next) => {
  try {

    const order = new Order(req.body);
    const result = await order.save();

    if (!result) {
      return res.status(400).json({ message: "Erreur lors de l'ajout" });
    }
    res.status(201).json({ message: "ajout réussi", data: result });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erreur lors de l'ajout", error: err.message || err });
  }
};

exports.getAllOrder = async (req, res, next) => {
  try {
    const order = await Order.find();

  } catch (err) {
    res
      .status(500)
      .json({ message: "Aucun élément trouvé", error: err.message || err });
  }
};

exports.getOneOrder = async (res, req, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ message: `Donnés invalides: ${errors}` });
    const order = await Order.findOne({ _id: req.params.id });
    if (!order) {
      res.status(400).json({ message: "Elément non trouvé" });
    }
    res.status(200).json(order);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Elément non trouvé", error: err.message || err });
  }
};

exports.updateOneOrder = async (res, req, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      res.status(422).json({ message: `Donnés invalides ${errors}` });
    const { _id, ...updateData } = req.body;
    const order = await Order.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    if (!order) {
      res.status(400).json({ message: "Erreur lors de la mis à jour" });
    }
    res.status(200).json({ message: "Mis à jour réussi", data: order });
  } catch (err) {
    res.status(500).json({
      message: "Erreur lors de la mis à jour",
      error: err.message || err,
    });
  }
};

exports.deleteOneOrder = async (res, req, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ message: `Donnés invalides ${errors}` });
    }
    const result = await Order.deleteOne({ _id: req.params.id });
    if (!result) {
      return res.status(400).json({ message: `Erreur lors de la suppression` });
    }
    res.status(200).json({ message: "suppression réussi" });
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la suppression",
        error: err.message || err,
      });
  }
};
