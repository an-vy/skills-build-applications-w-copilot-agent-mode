import { Router } from 'express';
import type { Model, SortOrder } from 'mongoose';

type SortSpec = Record<string, SortOrder>;

export function createCollectionRouter(
  resourceName: string,
  model: Model<any>,
  sort: SortSpec = { createdAt: -1 }
): Router {
  const router = Router();

  router.get('/', async (_req, res) => {
    try {
      const items = await model.find().sort(sort);
      res.json({ items });
    } catch (error) {
      console.error(`Failed to fetch ${resourceName}`, error);
      res.status(500).json({ message: `Failed to fetch ${resourceName}` });
    }
  });

  router.post('/', async (req, res) => {
    try {
      const item = await model.create(req.body);
      res.status(201).json(item);
    } catch (error) {
      console.error(`Failed to create ${resourceName}`, error);

      if (error instanceof Error && error.name === 'ValidationError') {
        res.status(400).json({ message: error.message });
        return;
      }

      res.status(500).json({ message: `Failed to create ${resourceName}` });
    }
  });

  return router;
}