"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _route = _interopRequireDefault(require("./routes/route"));

var _mysql = _interopRequireDefault(require("./db/mysql"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _expressSession = _interopRequireDefault(require("express-session"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MySQLStore = require('express-mysql-session')(_expressSession["default"]);

var options = {
  host: process.env.MYSQL_HOST,
  port: 3306,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
};
var app = (0, _express["default"])();
var sessionStore = new MySQLStore(options);
var port = 8080;
app.use(_bodyParser["default"].json());
app.use((0, _expressSession["default"])({
  secret: "fasdfasv",
  resave: false,
  saveUninitialized: true,
  store: sessionStore
}));
app.use("/", _express["default"]["static"](__dirname + "/../../client/build"));
app.use("/", _route["default"]);
var sql = "SELECT * FROM test";

_mysql["default"].query(sql, function (err, results, fields) {
  if (err) console.log(err);
  console.log("conn.query result : ".concat(results));
});

app.listen(port, function () {
  console.log("Express is listening on port", port);
});