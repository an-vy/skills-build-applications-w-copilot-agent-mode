import { createApp } from './app';
import { connectToDatabase } from './config/database';

const app = createApp();
const port = 8000;

export async function startServer(): Promise<void> {
  const codespaceName = process.env.CODESPACE_NAME;
  const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';

  await connectToDatabase();

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