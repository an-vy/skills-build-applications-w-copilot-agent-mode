"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const createCollectionRouter_1 = require("./createCollectionRouter");
const usersRouter = (0, createCollectionRouter_1.createCollectionRouter)('users', User_1.default, { name: 1 });
exports.default = usersRouter;
