const express = require('express');
const router= express.Router();
const {
    getAllProducts, 
    getProductById
} = require('../controller/productControllers');


/* get all products */
router.get('/', getAllProducts);

/* get a product */
router.get('/:id', getProductById);

module.exports = router;