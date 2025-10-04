// /models/Producto.js
const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: String, required: true },
  },
  { timestamps: true } // Agrega createdAt y updatedAt automáticamente
);

module.exports = mongoose.model("Producto", productoSchema);
