"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Team_1 = __importDefault(require("../models/Team"));
const createCollectionRouter_1 = require("./createCollectionRouter");
const teamsRouter = (0, createCollectionRouter_1.createCollectionRouter)('teams', Team_1.default, { totalPoints: -1, name: 1 });
exports.default = teamsRouter;
