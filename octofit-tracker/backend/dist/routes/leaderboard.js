"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Leaderboard_1 = __importDefault(require("../models/Leaderboard"));
const createCollectionRouter_1 = require("./createCollectionRouter");
const leaderboardRouter = (0, createCollectionRouter_1.createCollectionRouter)('leaderboard entries', Leaderboard_1.default, {
    score: -1,
    rank: 1,
});
exports.default = leaderboardRouter;
