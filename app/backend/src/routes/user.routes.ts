import { Router } from 'express';
import LoginControler from '../controllers/user.controller';
import validateLogin from '../middleware/login.middleware';

const loginRouter = Router();
const LoginController = new LoginControler();

loginRouter.post(
  '/',
  validateLogin.validateLogin,
  LoginController.login,
);

loginRouter.get(
  '/role',
  validateLogin.validateToken,
  LoginController.getRole,
);

export default loginRouter;
