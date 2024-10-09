const { Pool } = require("pg");

// Configuration for the PostgreSQL connection
const pool = new Pool({
  user: "your_username",
  host: "your_database_host",
  database: "your_database_name",
  password: "your_password",
  port: 5432,
});

// Export the pool object to use it in other parts of your application
module.exports = pool;
