// Import the pool object
const pool = require("./path_to_your_pool_configuration_file");

// Example query
const studentId = 5;
const newName = "harish";
const newClass = 10;

pool.query("UPDATE students SET name=$1, class=$2 WHERE studentid=$3", [newName, newClass, studentId], (error, results) => {
  if (error) {
    throw error;
  }
  console.log(`Rows affected: ${results.rowCount}`);
});
