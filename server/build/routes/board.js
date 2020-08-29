"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _mysql = _interopRequireDefault(require("../db/mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router();

router.post("/", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var username, title, content, sql, post;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = req.session.token;
            title = req.body.title;
            content = req.body.content;
            sql = "SELECT id FROM user WHERE username =?";
            post = [username];
            _context.next = 7;
            return _mysql["default"].query(sql, post, function (err, results, fields) {
              if (err) {
                console.log(err);
                return res.json({
                  ok: false,
                  status: 400,
                  error: "db error"
                });
              } else {
                var user_id = results[0].id;
                var _sql = "INSER INTO board(title, content, writer) VALUES (?,?,?)";
                var _post = [title, content, user_id];

                _mysql["default"].query(_sql, _post, function (err, results, fields) {
                  if (err) {
                    console.log(err);
                    return res.json({
                      ok: false,
                      status: 400,
                      error: "fail to write"
                    });
                  } else {
                    return res.json({
                      ok: false,
                      status: 200,
                      error: null
                    });
                  }
                });
              }
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;