"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const express_1 = __importDefault(require("express"));
const apiBaseUrl_1 = require("./config/apiBaseUrl");
const api_1 = __importDefault(require("./routes/api"));
function createApp() {
    const app = (0, express_1.default)();
    const baseUrl = (0, apiBaseUrl_1.getApiBaseUrl)();
    app.use(express_1.default.json());
    app.use('/api', api_1.default);
    app.get('/', (_req, res) => {
        res.json({
            message: 'OctoFit Tracker API',
            apiBaseUrl: baseUrl,
            health: `${baseUrl}/api/health`,
        });
    });
    return app;
}
