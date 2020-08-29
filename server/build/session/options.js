"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var options = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
};
var _default = options;
exports["default"] = _default;