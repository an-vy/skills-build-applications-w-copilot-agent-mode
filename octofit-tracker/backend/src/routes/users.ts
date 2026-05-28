import User from '../models/User';
import { createCollectionRouter } from './createCollectionRouter';

const usersRouter = createCollectionRouter('users', User, { name: 1 });

export default usersRouter;