// Database connection
const user = process.env.POSTGRES_USER
const pwd = process.env.POSTGRES_PASSWORD
const pg_uri = process.env.POSTGRES_URI
const db = process.env.POSTGRES_DB

const sequelize = new Sequelize(`postgres://${user}:${pwd}@${pg_uri}/${db}`)

  // Test connection to database
  async function testAuthenticate() {
    try {
      await sequelize.authenticate();
      console.log("[DATABASE] - Connection has been established successfully.");
    } catch (error) {
      console.error("[DATABASE] - Unable to connect to the database", error);
    }
  }

  testAuthenticate();

  module.exports = sequelize