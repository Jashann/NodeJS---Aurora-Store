// My Modules
const { render } = require('ejs')
const Product = require('./../models/Product')
const ExistingProduct = require('./../models/ExistingProduct')
// path = "/admin/foo"

class Admin {
  static getIndexPage = (req, res, next) => {
    res.render('index_admin_', {
      activeLink: '/admin',
      pageTitle: 'Admin - Home',
    })
  }
  static getAddProductPage = (req, res, next) => {
    res.render('edit-product_admin_', {
      activeLink: '/admin/add-product',
      pageTitle: 'Admin - Add Product',
      editing: false,
    })
  }
  static postAddProduct = (req, res, next) => {
    let { title, price, description } = req.body
    price = Number(price)

    const product = new Product(title, price, description)

    let length = req.body['images-length']

    for (let i = 0; i < length; i++) {
      product.setImage(req.body[`image_url_${i + 1}`])
    }

    product.displayData()

    product.addProductToFile()

    res.redirect('/admin/products')
  }

  static postEditProduct = (req, res, next) => {
    let { title, price, description, productID } = req.body
    price = Number(price)

    const currentProduct = new ExistingProduct(
      title,
      price,
      description,
      productID
    )

    let length = req.body['images-length']

    for (let i = 0; i < length; i++) {
      currentProduct.setImage(req.body[`image_url_${i + 1}`])
    }

    currentProduct.updateProductToFile()

    res.redirect('/admin/products')
  }

  static getEditProductPage = (req, res, next) => {
    const productID = req.query.productID
    const editing = Boolean(req.query.editing)
    if (editing) {
      Product.getProductById(productID, (product) => {
        if (product)
          res.render('edit-product_admin_', {
            pageTitle: `Edit Product - ${product.title}`,
            activeLink: '/admin/edit-product',
            editing: editing,
            product,
            productID,
          })
      })
    } else next()
  }

  static getProductsPage = (req, res, next) => {
    Product.readData((data) => {
      res.render('products-list_admin_', {
        activeLink: '/admin/products',
        pageTitle: 'Admin - Products',
        Products: data,
      })
    })
  }

  static postDeleteProduct = (req, res, next) => {
    const productID = req.query.id
    Product.deleteProduct(productID, (success) => {
      if (success) res.redirect('/admin/products')
    })
  }
}

module.exports = Admin
