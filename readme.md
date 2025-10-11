# API de Productos

Una API REST desarrollada en Node.js y Express para gestionar productos con operaciones CRUD completas.

## Despliegue

**La API está desplegada en:** https://api-productos-theta.vercel.app/api/productos/

## Características

- **CRUD completo**: Crear, leer, actualizar y eliminar productos
- **Base de datos MongoDB**: Persistencia de datos
- **CORS configurado**: Para comunicación con el frontend
- **Validación de datos**: Validación de esquemas de productos
- **API RESTful**: Endpoints estándar para operaciones CRUD

## Estructura del Proyecto

```
├── app.js                 # Configuración principal de Express
├── config/
│   ├── db.js             # Configuración de MongoDB
│   └── corsOptions.js    # Configuración de CORS
├── models/
│   └── Producto.js       # Modelo de Mongoose para Producto
├── routes/
│   └── productos.js      # Rutas de la API
└── vercel.json          # Configuración de Vercel
```

## Tecnologías Utilizadas

- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **CORS** - Middleware para Cross-Origin Resource Sharing
- **Vercel** - Plataforma de despliegue

## Conexión con Frontend

Esta API está conectada con el frontend desplegado en:
**https://front-funcionesbasicas.vercel.app/**

## Endpoints Disponibles

### Productos

- `GET /api/productos` - Obtener todos los productos
- `GET /api/productos?categoria=X` - Filtrar productos por categoría
- `POST /api/productos` - Crear nuevo producto
- `PUT /api/productos/:id` - Actualizar producto existente
- `DELETE /api/productos/:id` - Eliminar producto

### Estructura de Producto

```json
{
  "_id": "string",
  "nombre": "string",
  "precio": "number",
  "categoria": "string",
  "createdAt": "date",
  "updatedAt": "date"
}
```

## Instalación Local

### 1. **Instalar dependencias**:

```bash
npm install
```

### 2. **Configurar variables de entorno**:

Crear archivo `.env` con:

```
MONGODB_URI=tu_mongodb_connection_string
```

### 3. **Ejecutar en desarrollo**:

```bash
npm start
```

La API estará disponible en `http://localhost:3000`

## 🔧 Configuración

### MongoDB

La aplicación se conecta a MongoDB Atlas. Asegúrate de configurar la variable `MONGODB_URI` en tu archivo de configuración.

### CORS

El CORS está configurado para permitir conexiones desde:

- `http://localhost:5173` (desarrollo local)
- `https://front-funcionesbasicas.vercel.app` (producción)

## Estado del Sistema

La API incluye un endpoint de estado para verificar la conectividad:

- `GET /api/status` - Verificar estado de la API y conexión a BD

## Scripts Disponibles

- `npm start` - Iniciar servidor en producción
- `npm run dev` - Iniciar servidor en desarrollo (con nodemon)
