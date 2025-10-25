//config/corsOptions.js

const corsOptions = {
  origin: [
    "https://productos-frontend.vercel.app",
    "https://front-funcionesbasicas.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

module.exports = corsOptions;
