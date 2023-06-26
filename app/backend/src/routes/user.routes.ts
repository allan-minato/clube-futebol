import { Router } from 'express';
import LoginControler from '../controllers/user.controller';
import validateLogin from '../middleware/validation.middleware';

const LoginController = new LoginControler();

const loginRouter = Router();

loginRouter.post('/', validateLogin.validateLogin, (req, res) =>
  LoginController.login(req, res));

loginRouter.get('/role', validateLogin.validateToken, (req, res) =>
  LoginController.getRole(req, res));

export default loginRouter;
