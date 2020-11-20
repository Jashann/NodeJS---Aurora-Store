// My Modules
const Product = require('./../models/Product')

// path = "/admin/foo"

class Admin {
  static getIndexPage = (req, res, next) => {
    res.render('index_admin_', {
      activeLink: '/admin',
      pageTitle: 'Admin - Home',
    })
  }
  static getAddProductPage = (req, res, next) => {
    res.render('add-product_admin_', {
      activeLink: '/admin/add-product',
      pageTitle: 'Admin - Add Product',
    })
  }
  static postAddProductPage = (req, res, next) => {
    let title = req.body.title
    let price = req.body.price
    let image_url = req.body.image_url
    let description = req.body.description

    const product = new Product(title, price, image_url, description)
    product.writeDataFromFile()

    res.redirect('/admin/products')
  }
  static getProductsPage = (req, res, next) => {
    Product.readDatafromFile((data) => {
      res.render('products-list_admin_', {
        activeLink: '/admin/products',
        pageTitle: 'Admin - Products',
        Products: data,
      })
    })
  }
}

module.exports = Admin
