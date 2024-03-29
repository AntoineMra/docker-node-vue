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

// Swagger Specs
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Template Project API',
      version: '1.0.0',
    },
  },
  apis: ['./routes*.js'],
}

// Select the env file

dotenv.config()
const PORT = process.env.API_PORT || 5000

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`)
})

// Database connection
const user = process.env.POSTGRES_USER
const pwd = process.env.POSTGRES_PASSWORD
const pg_uri = process.env.POSTGRES_URI
const db = process.env.POSTGRES_DB
const sequelize = new Sequelize(`postgres://${user}:${pwd}@${pg_uri}/${db}`)

console.log(sequelize)

// Serve the app with swagger on / route
const openapiSpecification = swaggerJsdoc(options)

app.use('/', swaggerUi.serve, swaggerUi.setup(openapiSpecification))
