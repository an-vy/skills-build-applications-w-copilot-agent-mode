const apiPort = 8000;

export function getApiBaseUrl(): string {
  const codespaceName = process.env.CODESPACE_NAME;

  return codespaceName
    ? `https://${codespaceName}-${apiPort}.app.github.dev`
    : `http://localhost:${apiPort}`;
}

export { apiPort };