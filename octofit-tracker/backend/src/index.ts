import { createApp } from './app';
import { connectToDatabase } from './config/database';

const app = createApp();
const port = 8000;

async function startServer(): Promise<void> {
  await connectToDatabase();

  app.listen(port, () => {
    console.log(`OctoFit backend listening on port ${port}`);
  });
}

startServer().catch((error) => {
  console.error('Failed to start server', error);
  process.exit(1);
});
