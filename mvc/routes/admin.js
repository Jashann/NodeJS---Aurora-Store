const express = require('express')
const router = express.Router()

const adminController = require('./../controllers/admin')

// /admin/
router.get('/', adminController.getIndexPage)

router.get('/edit-product', adminController.getEditProductPage)

router.get('/edit-product', adminController.getAddProductPage)

router.post('/edit-product', adminController.postEditProduct)

router.post('/add-product', adminController.postAddProduct)

router.get('/products', adminController.getProductsPage)

module.exports = router
