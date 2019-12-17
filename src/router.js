import { Router } from 'express';
const routes = Router();

import SignInController from './controllers/SignInController';

routes.get('/', SignInController.create);

export default routes;
