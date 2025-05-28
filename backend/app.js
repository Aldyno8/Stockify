const express = require("express");
const mongoose = require("mongoose");
const app = express();
const rawMaterialRoutes = require("./routes/raw-materials-routes");
const finishedProductRoutes = require("./routes/finished-product-routes");
// const productionRoutes = require("./routes/production-routes");
const authRoutes = require("./routes/auth-routes");

mongoose
  .connect(process.env.atlas)
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

app.use(rawMaterialRoutes);
app.use(authRoutes);
app.use(finishedProductRoutes);
// app.use(productionRoutes);

module.exports = app;
