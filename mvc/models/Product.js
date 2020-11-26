// Node - Core Modules
const path = require('path')
const fs = require('fs')

// My Modules
const HELPER = require('./../../helper')

const filePath = path.join(HELPER.getRootPath(), 'data.json')

class Product {
  constructor(title, price, description) {
    this.title = title
    this.price = price
    this.description = description
    this.image_url = []
  }

  displayData = () => {
    console.log(this.title, this.price, this.description, this.image_url)
  }

  setImage = (image_url) => {
    this.image_url.push(image_url)
  }

  static readDatafromFile = (cb) => {
    fs.readFile(filePath, (error, data) => {
      let parsedData = []
      if (error) {
        if (error.errno === -4058) cb(parsedData)
        else alert(error.message)
      } else {
        parsedData = JSON.parse(data)
        cb(parsedData)
      }
    })
  }

  writeDataToFile = () => {
    Product.readDatafromFile((data) => {
      const dataToBeAdded = {
        title: this.title,
        price: this.price,
        image_url: this.image_url,
        description: this.description,
        id: '_' + Math.random().toString(36).substr(2, 9),
      }

      data.push(dataToBeAdded)

      fs.writeFile(filePath, JSON.stringify(data), (err) => {
        if (err) alert(err.message)
        else console.log('Data written!!')
      })
    })
  }

  static getProductById = (productID, cb) => {
    this.readDatafromFile((products) => {
      if (products) {
        const product = products.find((product) => product.id === productID)
        cb(product)
      } else cb(null)
    })
  }
}

module.exports = Product
