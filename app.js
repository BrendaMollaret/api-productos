// app.js
const express = require("express");
const cors = require("cors"); // 1. Importar el paquete cors
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productosRoutes = require("./routes/productos");
const corsOptions = require("./config/corsOptions"); // 2. Importar las opciones de CORS
const app = express();

dotenv.config(); // Cargar variables de entorno
connectDB(); // Conectar a la base de datos

//Configuración de cors
app.use(cors(corsOptions)); // 3. Usar el middleware de CORS con las opciones definidas

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
  console.log(`CORS configurado para http://localhost:5173`); // Confirmación de configuración de CORS
});
