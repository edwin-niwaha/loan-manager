import mysql from "mysql2";

const conn = mysql.createConnection({
  host: "localhost", // Replace with your host name
  user: "root", // Replace with your database username
  password: "_Pearl!22@", // Replace with your database password
  database: "loan_mger", // // Replace with your database Name
  // port: 3081,
});
//

conn.connect(function (err) {
  if (err) throw err;
  console.log("DB connected successfully !");
});

export default conn;
