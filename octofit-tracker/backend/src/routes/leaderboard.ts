import Leaderboard from '../models/Leaderboard';
import { createCollectionRouter } from './createCollectionRouter';

const leaderboardRouter = createCollectionRouter('leaderboard entries', Leaderboard, {
  score: -1,
  rank: 1,
});

export default leaderboardRouter;