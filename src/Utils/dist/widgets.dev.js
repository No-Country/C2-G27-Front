"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userWidgets = exports.allWidgets = void 0;

var _BarsChart = _interopRequireDefault(require("../Components/BarsChart"));

var _LinesChart = _interopRequireDefault(require("../Components/LinesChart"));

var _PiesChart = _interopRequireDefault(require("../Components/PiesChart"));

var _ComposedsChart = _interopRequireDefault(require("../Components/ComposedsChart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var allWidgets = {
  "BarsChart": _BarsChart["default"],
  "PiesChart": _PiesChart["default"],
  "LinesChart": _LinesChart["default"],
  "ComposedsChart": _ComposedsChart["default"]
};
exports.allWidgets = allWidgets;
var userWidgets = {
  "BarsChart": _BarsChart["default"],
  "PiesChart": _PiesChart["default"],
  "LinesChart": _LinesChart["default"]
};
exports.userWidgets = userWidgets;