const express = require('express')
const router = express.Router()

const customerController = require('./../controllers/customer')

router.get('/', customerController.getIndexPage)

router.get('/products/:productID', customerController.getSingleProductPage)

router.get('/products', customerController.getProductsPage)

router.get('/cart', customerController.getCartPage)

router.post('/cart/delete', customerController.postDeleteProductFromCart)

router.post('/cart/update', customerController.postUpdateProductInCart)

router.get('/order', customerController.getOrderPage)

router.post('/add-to-cart', customerController.postAddProductToCart)

module.exports = router
