require("dotenv").config();

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: `${process.env.MYhost}`,
  user: `${process.env.MYuser}`,
  password: `${process.env.MYpassword}`,
  database: `${process.env.MYdatabase}`
});

const pool = mysql.createPool({
  host: `${process.env.MYhost}`,
  user: `${process.env.MYuser}`,
  password: `${process.env.MYpassword}`,
  database: `${process.env.MYdatabase}`,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

connection.connect (function (error) {
  if(error) throw error;
  console.log("Connected");
});

module.exports = { pool };
