const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan")
const app = express();
const productRoutes = require("./routes/product-routes");
const authRoutes = require("./routes/auth-routes");
const orderRoutes = require("./routes/order-routes")
const auth = require("./middlewares/auth-middleware");

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

app.use(morgan("dev")); 
app.use(productRoutes);
app.use(authRoutes);
app.use(orderRoutes);

module.exports = app;
