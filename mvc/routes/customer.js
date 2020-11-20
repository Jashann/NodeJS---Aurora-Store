const express = require('express')
const router = express.Router()

const customerController = require('./../controllers/customer')

router.get('/', customerController.getIndexPage)

router.get('/products', customerController.getProductsPage)

router.get('/cart', customerController.getCartPage)

router.get('/order', customerController.getOrderPage)

module.exports = router
