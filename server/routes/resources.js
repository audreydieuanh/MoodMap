import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import resourcesData from '../data/resources.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resourceRouter = express.Router();

resourceRouter.get('/', (req, res) => {
    console.log('Received request for resources');
    res.status(200).json(resourcesData);
});

resourceRouter.get('/:resourceId', (req, res) => {
    const resourceId = req.params.resourceId;
    console.log(`Request for resource ID: ${resourceId}`);
    res.status(200).sendFile(path.resolve(__dirname, '../public/resource.html'));
});



export default resourceRouter;