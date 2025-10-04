// app.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productosRoutes = require("./routes/productos");

dotenv.config(); // Cargar variables de entorno
connectDB(); // Conectar a la base de datos

const app = express();
app.use(express.json()); // Middleware para leer JSON

//ruta base
app.get("/", (req, res) => {
  res.send("API de Productos");
});

app.use("/api", productosRoutes); //http://localhost:3000/api/productos

//Iniciamos el servidor
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
