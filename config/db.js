// /config/db.js
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error al conectar a mongodb", error);
    process.exit(1); // Detiene el servidor si hay algún error
  }
};

module.exports = connectDB;
