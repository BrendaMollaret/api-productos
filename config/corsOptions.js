//config/corsOptions.js

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://front-funcionesbasicas.vercel.app",
"https://productos-frontend.vercel.app/",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

module.exports = corsOptions;
