import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import "components/css/posts.scss";

function ExpressMysql() {
  let Title = "Express with MySql";
  return (
    <div className="post-wrapper post">
      <h3 className="post-title text-center">{Title}</h3>
      <div className="sec01">
      <h5 className="subsub">dbconfig.mysql.js</h5>
      <SyntaxHighlighter language="javascript" style={xonokai}>
        {`require("dotenv").config();

const mysql = require('mysql2');

const pool = mysql.createPool({
  host: \`${process.env.MYhost}\`,
  user: \`${process.env.MYuser}\`,
  password: \`${process.env.MYpassword}\`,
  database: \`${process.env.MYdatabase}\`,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 20,
});

pool.getConnection(function(err, connection) {
  if(err) throw err;
  console.log(\`process.env.MYhost: \`, process.env.MYhost);
  console.log(\`process.env.MYuser: \`, process.env.MYuser);
  console.log(\`process.env.MYdatabase: \`, process.env.MYdatabase);
})

// Attempt to catch disconnects
pool.on('connection', function (connection) {
  console.log('DB Connection established');

  connection.on('error', function (err) {
    console.error(new Date(), 'MySQL error', err.code);
  });
  connection.on('close', function (err) {
    console.error(new Date(), 'MySQL close', err);
  });

});

module.exports = pool;
`}
</SyntaxHighlighter>

      <h5 className="subsub">app.js</h5>
      <SyntaxHighlighter
        language="javascript"
        style={xonokai}
      >

      {`const path = require('path');
require("dotenv").config();
const express = require("express");
const server = express();
const pool = require("./dbConfig.mysql");
const session = require("express-session");
const MemoryStore = require('memorystore')(session);

const PORT = process.env.PORT || 4000;

server.set("view engine", "ejs");

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(
  session({
    secret: \`${process.env.secret}\`,
    resave: false,
    saveUninitialized: false,
    sameSite: "none",
    cookie: { httpOnly: false, maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
  })
);

var router = express.Router({mergeParams: true});

server.use(router);
console.log(\`process.env.NODE_ENV =\`,process.env.NODE_ENV);

if(process.env.NODE_ENV === 'dev') {
  router.use(express.static(path.join(__dirname, '/client/build')));
} else {
  router.use(express.static(path.join(__dirname, '/public')));
}

router.get("/api/todos/all", (req, res) => {
  try {
    console.log(\`in /api/todos/all\`);
    let sql = 'SELECT * FROM todos';

    pool.execute(sql, (error, results) => {
      if(error) throw error;
      if(results.length > 0){
        res.status(200).json(results);
      } else {
        res.status(404).send('No records found');
      }
    })
  } catch (error) {
    return error;
     }
 });
 ...`}
 </SyntaxHighlighter>
    </div>
    </div>
  );
}
export default ExpressMysql;
