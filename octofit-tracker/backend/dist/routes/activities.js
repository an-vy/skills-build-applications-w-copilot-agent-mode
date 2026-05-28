"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Activity_1 = __importDefault(require("../models/Activity"));
const createCollectionRouter_1 = require("./createCollectionRouter");
const activitiesRouter = (0, createCollectionRouter_1.createCollectionRouter)('activities', Activity_1.default, {
    performedAt: -1,
});
exports.default = activitiesRouter;
