import { Router } from 'express';

import SignInController from './controllers/SignInController';

const routes = Router();

routes.post('/signin', SignInController.create);

export default routes;
