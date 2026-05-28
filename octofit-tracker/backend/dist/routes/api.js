"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiBaseUrl_1 = require("../config/apiBaseUrl");
const activities_1 = __importDefault(require("./activities"));
const leaderboard_1 = __importDefault(require("./leaderboard"));
const teams_1 = __importDefault(require("./teams"));
const users_1 = __importDefault(require("./users"));
const workouts_1 = __importDefault(require("./workouts"));
const apiRouter = (0, express_1.Router)();
apiRouter.get('/health', (_req, res) => {
    const apiBaseUrl = (0, apiBaseUrl_1.getApiBaseUrl)();
    res.json({
        status: 'ok',
        service: 'octofit-backend',
        apiBaseUrl,
    });
});
apiRouter.get('/', (_req, res) => {
    const apiBaseUrl = (0, apiBaseUrl_1.getApiBaseUrl)();
    res.json({
        apiBaseUrl,
        resources: [
            `${apiBaseUrl}/api/users`,
            `${apiBaseUrl}/api/teams`,
            `${apiBaseUrl}/api/activities`,
            `${apiBaseUrl}/api/leaderboard`,
            `${apiBaseUrl}/api/workouts`,
        ],
    });
});
apiRouter.use('/users', users_1.default);
apiRouter.use('/teams', teams_1.default);
apiRouter.use('/activities', activities_1.default);
apiRouter.use('/leaderboard', leaderboard_1.default);
apiRouter.use('/workouts', workouts_1.default);
exports.default = apiRouter;
