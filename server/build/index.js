"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _route = _interopRequireDefault(require("./routes/route"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _storeOptions = _interopRequireDefault(require("./session/storeOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MySQLStore = require('express-mysql-session')(_expressSession["default"]);

var app = (0, _express["default"])();
var sessionStore = new MySQLStore(_storeOptions["default"]);
var port = 8080;
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _expressSession["default"])({
  key: "sadkljsdaklj!",
  secret: "askldjaslkdj@",
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}));
app.use("/api", _route["default"]);
app.use("/", _express["default"]["static"](__dirname + "/../../client/build"));
app.get("/test", function (req, res) {
  req.session.test = 1;
  var session = req.session.test;
  return res.json({
    session: session
  });
});
app.listen(port, function () {
  console.log("Express is listening on port", port);
});