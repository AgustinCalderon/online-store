const express = require('express');
const router = express.Router();
const products = require('../controller/index');

router.get('/products', products.getAll)
router.get('/products/:id', products.getById)

module.exports = router
