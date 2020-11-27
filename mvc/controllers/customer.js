// My Modules
const Product = require('./../models/Product')
const Cart = require('./../models/Cart')

module.exports.getIndexPage = (req, res, next) => {
  res.render('index', {
    activeLink: '/',
    pageTitle: 'Home - Aurora Store',
  })
}

module.exports.getProductsPage = (req, res, next) => {
  Product.readData((data) => {
    res.render('products', {
      activeLink: '/products',
      pageTitle: 'Products - Aurora Store',
      Products: data,
    })
  })
}

module.exports.getCartPage = (req, res, next) => {
  res.render('cart', {
    activeLink: '/cart',
    pageTitle: 'My Cart - Aurora Store',
  })
}

module.exports.getOrderPage = (req, res, next) => {
  res.render('order', {
    activeLink: '/order',
    pageTitle: 'My Order - Aurora Store',
  })
}

module.exports.getSingleProductPage = (req, res, next) => {
  const productID = req.params.productID
  Product.getProductById(productID, (product) => {
    if (product)
      res.render('product', {
        activeLink: 'none',
        pageTitle: product.title,
        product,
      })
  })
}

module.exports.postAddProductToCart = (req, res, next) => {
  const productID = req.body.productID
  Cart.addProduct(productID)
}
