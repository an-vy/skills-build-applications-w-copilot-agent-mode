import { Router } from 'express';
import { getApiBaseUrl } from '../config/apiBaseUrl';
import activitiesRouter from './activities';
import leaderboardRouter from './leaderboard';
import teamsRouter from './teams';
import usersRouter from './users';
import workoutsRouter from './workouts';

const apiRouter = Router();

apiRouter.get('/health', (_req, res) => {
  const apiBaseUrl = getApiBaseUrl();

  res.json({
    status: 'ok',
    service: 'octofit-backend',
    apiBaseUrl,
  });
});

apiRouter.get('/', (_req, res) => {
  const apiBaseUrl = getApiBaseUrl();

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

apiRouter.use('/users', usersRouter);
apiRouter.use('/teams', teamsRouter);
apiRouter.use('/activities', activitiesRouter);
apiRouter.use('/leaderboard', leaderboardRouter);
apiRouter.use('/workouts', workoutsRouter);

export default apiRouter;
