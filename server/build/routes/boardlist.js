"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _mysql = _interopRequireDefault(require("../db/mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/", function (req, res) {
  if (!req.session.token) {
    return res.json({
      ok: false,
      status: 400,
      error: "unauthorized"
    });
  }

  var sql = "select b.id, b.title, b.content, u.username FROM board b INNER JOIN user u ON b.writer = u.id LIMIT 100";

  _mysql["default"].query(sql, function (err, results, fields) {
    if (err) {
      console.log(err);
      return res.json({
        ok: false,
        status: 400,
        error: "db error"
      });
    }

    var boardlist = results;
    return res.json({
      boardlist: boardlist
    });
  });
});
var _default = router;
exports["default"] = _default;