// Node - Core Modules
const path = require('path')

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

  // static readDatafromFile = (cb) => {
  //   fs.readFile(filePath, (error, data) => {
  //     let parsedData = []
  //     if (error) {
  //       if (error.errno === -4058) cb(parsedData)
  //       else alert(error.message)
  //     } else {
  //       parsedData = JSON.parse(data)
  //       cb(parsedData)
  //     }
  //   })
  // }

  addProductToFile = () => {
    // filePath => data.json
    HELPER.readDatafromFile(filePath, (data) => {
      const dataToBeAdded = {
        title: this.title,
        price: this.price,
        image_url: this.image_url,
        description: this.description,
        id: '_' + Math.random().toString(36).substr(2, 9),
      }

      data.push(dataToBeAdded)
      // Product.writeJsonToFile(data)
      HELPER.writeDataToFile(filePath, data, (success) => {
        if (success) console.log('Product added')
      })
    })
  }

  // static writeJsonToFile = (data, cb) => {
  //   fs.writeFile(filePath, JSON.stringify(data), (err) => {
  //     if (err) {
  //       alert(err.message)
  //       if (cb) cb(null)
  //     } else {
  //       console.log('Operation Performed!')
  //       if (cb) cb(true)
  //     }
  //   })
  // }

  static readData(cb) {
    HELPER.readDatafromFile(filePath, (data) => cb(data))
  }

  static getProductById = (productID, cb) => {
    HELPER.readDatafromFile(filePath, (products) => {
      if (products) {
        const product = products.find((product) => product.id === productID)
        cb(product)
      } else cb(null)
    })
  }

  static deleteProduct = (productID, cb) => {
    HELPER.readDatafromFile(filePath, (data) => {
      if (data) {
        const updatedData = data.filter((product) => product.id !== productID)
        HELPER.writeDataToFile(filePath, updatedData, (success) => {
          if (success) cb(true)
          else cb(false)
        })
      }
    })
  }
}

module.exports = Product
