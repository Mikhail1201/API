const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.route.js');
const mongoose = require('mongoose');
const User = require('./models/user.model.js');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/users', userRoutes);

mongoose.connect('mongodb+srv://admin:16EZtxm65JDh9bxi@backenddb.09ayuif.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB').then(() => {  
  console.log('Conexión a MongoDB exitosa');
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Error al conectar a MongoDB:', error);
});
