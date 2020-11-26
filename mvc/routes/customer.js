const express = require('express')
const Product = require('../models/Product')
const router = express.Router()

const customerController = require('./../controllers/customer')

router.get('/', customerController.getIndexPage)

router.get('/products', customerController.getProductsPage)

router.get('/cart', customerController.getCartPage)

router.get('/order', customerController.getOrderPage)

router.get('/products/:productID', customerController.getSingleProductPage)

module.exports = router
