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
  console.log(`pool: `, pool);
  console.log(`process.env.MYhost: `, process.env.MYhost);
  console.log(`process.env.MYuser: `, process.env.MYuser);
  console.log(`process.env.MYdatabase: `, process.env.MYdatabase);
});

module.exports = { pool };
