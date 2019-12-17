import { Router } from 'express';

import SignInController from './app/controllers/SignUpController';

const routes = Router();

routes.post('/signup', SignInController.create);

export default routes;
