"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCollectionRouter = createCollectionRouter;
const express_1 = require("express");
function createCollectionRouter(resourceName, model, sort = { createdAt: -1 }) {
    const router = (0, express_1.Router)();
    router.get('/', async (_req, res) => {
        try {
            const items = await model.find().sort(sort);
            res.json({ items });
        }
        catch (error) {
            console.error(`Failed to fetch ${resourceName}`, error);
            res.status(500).json({ message: `Failed to fetch ${resourceName}` });
        }
    });
    router.post('/', async (req, res) => {
        try {
            const item = await model.create(req.body);
            res.status(201).json(item);
        }
        catch (error) {
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
