import express from 'express';
import apiRouter from './routes/api';
import { connectToDatabase } from './config/db';

const app = express();
const port = 8000;

const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(express.json());
app.use('/api', apiRouter);

app.get('/', (_req, res) => {
  res.json({
    message: 'OctoFit Tracker API',
    apiBaseUrl: baseUrl,
    health: `${baseUrl}/api/health`,
  });
});

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
