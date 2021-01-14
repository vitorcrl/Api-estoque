"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router_estoque_1 = __importDefault(require("./router.estoque"));
var routes = express_1.Router();
routes.use('/estoque', router_estoque_1.default);
exports.default = routes;
