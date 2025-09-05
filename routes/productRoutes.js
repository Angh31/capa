const express = require('express');
const router = express.Router();


// Rutas CRUD para Productos
const productController = require('../controllers/productController');

// Crear un nuevo producto
router.post('/products', productController.createProduct);

// Obtener todos los productos
router.get('/products', productController.getProducts);

// Contar productos
router.get('/products/conteo', productController.conteoProducts);

// Endpoint para la sumatoria de precios
router.get('/products/sumatoria', productController.sumatoriaProducts);


// Obtener productos por marca
router.get('/marca/:id/products', productController.getProductsmarca);

module.exports = router;
