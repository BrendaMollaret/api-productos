//config/corsOptions.js

const corsOptions = {
  origin: ["http://localhost:5173", "https://front-productos.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

module.exports = corsOptions;
