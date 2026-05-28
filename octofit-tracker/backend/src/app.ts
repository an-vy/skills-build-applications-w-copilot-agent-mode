import express from 'express';
import apiRouter from './routes/api';

export function createApp(): express.Express {
  const app = express();

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

  return app;
}