import express from "express";
import bodyParser from "body-parser";
import route from "./routes/route";
import conn from "./db/mysql";
import dotenv from "dotenv";
import session from "express-session";

var MySQLStore = require('express-mysql-session')(session);

var options = {
  host: process.env.MYSQL_HOST,
  port: 3306,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}



const app = express();
var sessionStore = new MySQLStore(options);
let port = 8080;

app.use(bodyParser.json());

app.use(session({
  secret: "fasdfasv",
  resave: false,
  saveUninitialized: true,
  store: sessionStore
}))
app.use("/", express.static(__dirname + "/../../client/build"));
app.use("/", route);



var sql = "SELECT * FROM test";
conn.query(sql, (err, results, fields) => {
  if (err) console.log(err);

  console.log(`conn.query result : ${results}`);
});

app.listen(port, () => {
  console.log("Express is listening on port", port);
});