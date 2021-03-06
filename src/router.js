import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SignUpController from './app/controllers/SignUpController';
import SignInController from './app/controllers/SignInController';
import AuthMiddleware from './app/middlewares/auth';

const routes = Router();

routes.post('/signin', SignInController.store);

routes.post('/signup', SignUpController.store);

routes.get('/user', AuthMiddleware, UserController.show);

routes.use((req, res, next) => {
  res.status(404).send('Ops! Rota não encontrada');
});

export default routes;
