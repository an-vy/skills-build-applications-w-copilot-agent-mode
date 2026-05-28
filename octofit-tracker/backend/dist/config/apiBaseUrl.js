"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiPort = void 0;
exports.getApiBaseUrl = getApiBaseUrl;
const apiPort = 8000;
exports.apiPort = apiPort;
function getApiBaseUrl() {
    const codespaceName = process.env.CODESPACE_NAME;
    return codespaceName
        ? `https://${codespaceName}-${apiPort}.app.github.dev`
        : `http://localhost:${apiPort}`;
}
