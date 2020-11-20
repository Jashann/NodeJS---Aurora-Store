// My Modules
const Product = require('./../models/Product')

module.exports.getIndexPage = (req, res, next) => {
  res.render('index', {
    activeLink: '/',
    pageTitle: 'Home - Aurora Store',
  })
}

module.exports.getProductsPage = (req, res, next) => {
  Product.readDatafromFile((data) => {
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