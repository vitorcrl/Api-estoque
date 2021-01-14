"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var Estoque = /** @class */ (function () {
    function Estoque(_a) {
        var name = _a.name, quantity = _a.quantity;
        this.id = uuid_1.v4();
        this.name = name;
        this.quantity = quantity;
    }
    return Estoque;
}());
exports.default = Estoque;
