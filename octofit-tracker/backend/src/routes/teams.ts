import Team from '../models/Team';
import { createCollectionRouter } from './createCollectionRouter';

const teamsRouter = createCollectionRouter('teams', Team, { totalPoints: -1, name: 1 });

export default teamsRouter;