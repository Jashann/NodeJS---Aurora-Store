// Node - Core Modules
const path = require('path')
const fs = require('fs')

// My Modules
const HELPER = require('./../../helper')
const Product = require('./Product')

const filePath = path.join(HELPER.getRootPath(), 'cart.json')

class Cart {
  static addProduct = (productID, cb) => {
    HELPER.readDatafromFile(filePath, (data) => {
      if (data) {
        let alreadyPresent = false

        data.forEach((product) => {
          if (product.id === productID) {
            product.quantity += 1
            alreadyPresent = true
          }
        })

        if (!alreadyPresent) {
          const newProduct = {
            id: productID,
            quantity: 1,
          }
          data.push(newProduct)
        }

        HELPER.writeDataToFile(filePath, data, (success) => cb(success))
      }
    })
  }

  static getCartItems = (cb) => {
    HELPER.readDatafromFile(filePath, (cartData) => {
      if (cartData) {
        let cartItems = []

        Product.readData((productsData) => {
          if (productsData) {
            cartData.forEach((cartProduct) => {
              productsData.forEach((product) => {
                if (product.id === cartProduct.id) {
                  product.quantity = cartProduct.quantity
                  cartItems.push(product)
                }
              })
            })
            cb(cartItems)
          }
        })
      }
    })
  }

  static deleteProduct(productID, cb) {
    HELPER.readDatafromFile(filePath, (data) => {
      const updatedData = data.filter((product) => product.id !== productID)
      HELPER.writeDataToFile(filePath, updatedData, (success) => cb(success))
    })
  }

  static updateProduct = (id, type, cb) => {
    HELPER.readDatafromFile(filePath, (cartProducts) => {
      const cartProd = cartProducts.find((cartProduct) => cartProduct.id === id)
      if (type === 'add') cartProd.quantity += 1

      if (type === 'minus') {
        if (cartProd.quantity === 1)
          return this.deleteProduct(id, (success) => cb(success))
        else cartProd.quantity -= 1
      }

      cartProducts.forEach((cartProduct) => {
        if (cartProduct.id === id) cartProduct.quantity = cartProd.quantity
      })

      HELPER.writeDataToFile(filePath, cartProducts, (success) => cb(success))
    })
  }
}

module.exports = Cart
