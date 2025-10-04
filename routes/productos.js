// /routes/productos.js
const express = require("express");
const router = express.Router();
const Producto = require("../models/Producto");

// Obtener todos los productos con filtro opcional por categoría
router.get("/productos", async (req, res) => {
  try {
    const { categoria } = req.query; //obtener el valor enviado en la url
    let productos;
    if (categoria) {
      productos = await Producto.find({ categoria });
    } else {
      productos = await Producto.find();
    }
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener productos" });
  }
});

// POST
router.post("/productos", async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    const nuevoProductoGuardado = await nuevoProducto.save();
    res.status(201).json(nuevoProductoGuardado);
  } catch (error) {
    res.status(400).json({ message: "Error al crear producto" });
  }
});

// PUT
router.put("/productos/:id", async (req, res) => {
  try {
    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!productoActualizado) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(productoActualizado);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar producto" });
  }
});

// DELETE
router.delete("/productos/:id", async (req, res) => {
  try {
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
    if (!productoEliminado) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar producto" });
  }
});
