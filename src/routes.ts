import { Router } from 'express';
import multer from 'multer';

import MulterConfig from './config/upload';

import OrphanagesController from './controllers/OphanagesController';

const routes = Router();

const upload = multer(MulterConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;
