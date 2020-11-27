// Node - Core Modules
const path = require('path')
const fs = require('fs')

// My Modules
const HELPER = require('./../../helper')

const filePath = path.join(HELPER.getRootPath(), 'data.json')

class Cart {
  static addProduct = (productID) => {
    const newProduct = {
      productID,
      quantity: 1,
    }

    const data = [newProduct]

    writeJsonToFile
  }
}

module.exports = Cart
