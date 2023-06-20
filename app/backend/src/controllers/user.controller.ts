import { Request, Response } from 'express';
import LoginService from '../services/user.service';

class LoginControler {
  private readonly userService: LoginService;

  constructor() {
    this.userService = new LoginService();
  }

  public login = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { email, password } = req.body;

      const token = await this.userService.login(email, password);

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(401).json({ message: error });
    }
  };

  public getRole = async (req: Request, res: Response): Promise<Response> => {
    try {
      const role = await this.userService.findRole(req.body.user.email);
      return res.status(200).json(role);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
}

export default LoginControler;
