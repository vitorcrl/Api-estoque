'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = require('express');
var routerEstoque = express_1.Router();
routerEstoque.get('/', function (request, response) {
  try {
    var _a = request.params,
      name_1 = _a.name,
      quantity = _a.quantity,
      user = _a.user;
    return response.json();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});
exports.default = routerEstoque;
