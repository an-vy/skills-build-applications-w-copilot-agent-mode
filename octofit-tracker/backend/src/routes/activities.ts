import Activity from '../models/Activity';
import { createCollectionRouter } from './createCollectionRouter';

const activitiesRouter = createCollectionRouter('activities', Activity, {
  performedAt: -1,
});

export default activitiesRouter;