/*

When you execute a query using pool.query in the pg library, the results parameter in the callback function provides detailed information about the query execution. Let's delve deeper into what results contains and how you can use it.

Structure of results
The results object returned by pool.query contains several properties, which include:

rowCount: The number of rows affected by the query. For SELECT queries, it is the number of rows returned. For INSERT, UPDATE, and DELETE queries, it is the number of rows modified.
rows: An array of objects representing each row returned by the query. Each object contains key-value pairs where the keys are the column names and the values are the corresponding data.
fields: Information about the fields (columns) in the result set. It includes metadata such as the column name, data type, etc.
command: The command type of the query executed, such as SELECT, INSERT, UPDATE, DELETE.
oid: The object ID of the inserted row if the query was an INSERT returning the OID.
_parsers: Internal parsers used for converting database types into JavaScript types.



Detailed Explanation
rowCount:

results.rowCount gives the count of rows affected or returned by the query. This is particularly useful for understanding the impact of UPDATE, DELETE, and INSERT operations.
rows:

results.rows is an array of objects where each object represents a row in the result set. Each property in the object corresponds to a column in the table.
You can loop through this array to process or display the data as needed.
fields:

results.fields provides metadata about the columns in the result set. Each element in this array is an object with details about a column, such as its name and data type.
command:

results.command gives the type of SQL command that was executed. This can be useful for logging or debugging purposes.
oid:

For INSERT operations, results.oid provides the object ID of the inserted row, if applicable. This is specific to PostgreSQL and can be useful for referencing the newly inserted row.
By understanding and utilizing these properties of the results object, you can effectively manage and manipulate the data returned from your database queries in a Node.js application using the pg library.

*/
// Import the pool object
const pool = require("./path_to_your_pool_configuration_file");

// Example query to fetch data from the students table
pool.query("SELECT * FROM students WHERE studentid=$1", [5], (error, results) => {
  if (error) {
    throw error;
  }

  // Accessing the number of rows returned
  console.log(`Number of rows returned: ${results.rowCount}`);

  // Accessing the rows returned by the query
  results.rows.forEach((row) => {
    console.log(`Student ID: ${row.studentid}, Name: ${row.name}, Class: ${row.class}`);
  });

  // Accessing the command type
  console.log(`Command executed: ${results.command}`);

  // Accessing field metadata
  results.fields.forEach((field) => {
    console.log(`Column name: ${field.name}, Data type: ${field.dataTypeID}`);
  });
});
