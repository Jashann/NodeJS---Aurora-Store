// Node - Core Modules
const path = require('path')
const fs = require('fs')

// My Modules
const HELPER = require('./../../helper')

const filePath = path.join(HELPER.getRootPath(), 'data.json')

const Product = require('./Product')

class ExistingProduct {
  constructor(title, price, description, id) {
    this.title = title
    this.price = price
    this.description = description
    this.id = id
    this.image_url = []
  }

  displayData = () => {
    console.log(this.title, this.price, this.description, this.image_url)
  }

  setImage = (image_url) => {
    this.image_url.push(image_url)
  }

  writeDataToFile = () => {
    Product.readDatafromFile((data) => {
      const currentProduct = data.find((product) => product.id === this.id)
      currentProduct.title = this.title
      currentProduct.price = this.price
      currentProduct.image_url = this.image_url
      currentProduct.description = this.description

      data.push(currentProduct)

      fs.writeFile(filePath, JSON.stringify(data), (err) => {
        if (err) alert(err.message)
        else console.log('Data written!!')
      })
    })
  }
}

module.exports = ExistingProduct
