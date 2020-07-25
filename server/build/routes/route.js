"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _home = _interopRequireDefault(require("./home"));

var _profile = _interopRequireDefault(require("./profile"));

var _feed = _interopRequireDefault(require("./feed"));

var _auth = _interopRequireDefault(require("./auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use("/", _home["default"]);
router.use("/profile", _profile["default"]);
router.use("/feed", _feed["default"]);
router.use("/auth", _auth["default"]);
var _default = router;
exports["default"] = _default;