import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = Router();

routes.post('/user/signup', UserController.store);
routes.get('/user/find', UserController.show);

routes.post('/user/signin', SessionController.store);

export default routes;
