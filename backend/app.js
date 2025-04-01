const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/stockify", {
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.error("Connexion à MongoDB échouée !", err));

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

module.exports = app;
