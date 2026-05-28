"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Workout_1 = __importDefault(require("../models/Workout"));
const createCollectionRouter_1 = require("./createCollectionRouter");
const workoutsRouter = (0, createCollectionRouter_1.createCollectionRouter)('workouts', Workout_1.default, {
    difficulty: 1,
    title: 1,
});
exports.default = workoutsRouter;
