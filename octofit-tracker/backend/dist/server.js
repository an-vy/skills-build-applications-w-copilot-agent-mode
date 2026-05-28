"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = startServer;
const app_1 = require("./app");
const database_1 = require("./config/database");
const app = (0, app_1.createApp)();
const port = 8000;
async function startServer() {
    const codespaceName = process.env.CODESPACE_NAME;
    const baseUrl = codespaceName
        ? `https://${codespaceName}-8000.app.github.dev`
        : 'http://localhost:8000';
    await (0, database_1.connectToDatabase)();
    app.listen(port, () => {
        console.log(`OctoFit backend listening on port ${port}`);
        console.log(`API available at ${baseUrl}`);
    });
}
if (require.main === module) {
    startServer().catch((error) => {
        console.error('Failed to start server', error);
        process.exit(1);
    });
}
