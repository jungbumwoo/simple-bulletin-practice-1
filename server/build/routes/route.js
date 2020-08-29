"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _profile = _interopRequireDefault(require("./profile"));

var _feed = _interopRequireDefault(require("./feed"));

var _auth = _interopRequireDefault(require("./auth"));

var _boardlist = _interopRequireDefault(require("./boardlist"));

var _comment = _interopRequireDefault(require("./comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use("/profile", _profile["default"]);
router.use("/feed", _feed["default"]);
router.use("/auth", _auth["default"]);
router.use("/boardlist", _boardlist["default"]);
router.use("/comment", _comment["default"]);
var _default = router;
exports["default"] = _default;