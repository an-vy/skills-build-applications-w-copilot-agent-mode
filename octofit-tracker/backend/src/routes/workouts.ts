import Workout from '../models/Workout';
import { createCollectionRouter } from './createCollectionRouter';

const workoutsRouter = createCollectionRouter('workouts', Workout, {
  difficulty: 1,
  title: 1,
});

export default workoutsRouter;