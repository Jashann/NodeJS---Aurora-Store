// Node - Core Modules
const path = require('path')
const fs = require('fs')

// My Modules
const HELPER = require('./../../helper')

const filePath = path.join(HELPER.getRootPath(), 'data.json')

class Product {
  constructor(title, price, image_url, description) {
    this.title = title
    this.price = price
    this.image_url = image_url
    this.description = description
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

  writeDataFromFile = () => {
    Product.readDatafromFile((data) => {
      const dataToBeAdded = {
        title: this.title,
        price: this.price,
        image_url: this.image_url,
        description: this.description,
      }

      data.push(dataToBeAdded)

      fs.writeFile(filePath, JSON.stringify(data), (err) => {
        if (err) alert(err.message)
        else console.log('Data written!!')
      })
    })
  }
}

module.exports = Product
