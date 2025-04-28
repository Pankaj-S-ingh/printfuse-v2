const express = require('express');
const { createProduct, getProducts } = require('../controllers/productController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createProduct);
router.get('/', authMiddleware, getProducts);

module.exports = router;
