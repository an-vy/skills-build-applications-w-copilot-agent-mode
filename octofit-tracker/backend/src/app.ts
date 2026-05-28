import express from 'express';
import { getApiBaseUrl } from './config/apiBaseUrl';
import apiRouter from './routes/api';

export function createApp(): express.Express {
  const app = express();
  const baseUrl = getApiBaseUrl();

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