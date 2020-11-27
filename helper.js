// Node -Core Modules
const fs = require('fs')

class Helper {
  static getRootPath() {
    return __dirname
  }

  static writeDataToFile = (filePath, data, cb) => {
    fs.writeFile(filePath, JSON.stringify(data), (err) => {
      if (err) {
        alert(err.message)
        if (cb) cb(null)
      } else {
        console.log('Operation Performed!')
        if (cb) cb(true)
      }
    })
  }

  static readDatafromFile = (filePath, cb) => {
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
}
module.exports = Helper
