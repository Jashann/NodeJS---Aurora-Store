// NODE - Core modules
const path = require('path')

// NPM - Installed modules
const express = require('express')
const bodyParser = require('body-parser')

// Routes
const customerRoutes = require('./mvc/routes/customer')
const adminRoutes = require('./mvc/routes/admin')

const app = express()

// for using css and javascript files in ejs/html.
app.use(express.static(path.join(__dirname, 'mvc', 'views')))

// for parsing body
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', [
  path.join(__dirname, 'mvc', 'views', 'customer'),
  path.join(__dirname, 'mvc', 'views', 'admin'),
])

app.set('view engine', 'ejs')

// Customer related - Routes handling
app.use('/', customerRoutes)
app.use('/admin', adminRoutes)

app.use((req, res) => {
  res.send('Invalid Request')
})

app.listen(1500, () => console.log('SERVER STARTED!!'))
