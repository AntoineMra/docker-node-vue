// Vars
const dotenv = require('dotenv')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const { Sequelize } = require('sequelize')

// Express App
const app = express()
app.use(cors())
app.use(bodyParser.json())

// Select the env file

dotenv.config()
const PORT = process.env.API_PORT || 5000

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`)
})
