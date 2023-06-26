import { compareSync } from 'bcryptjs';
import { NextFunction as nextF, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import Users from '../database/models/User';

const secret = process.env.JWT_SECRET || 'CORINTHIANS';

const message = 'Invalid email or password';

const validateLogin = async (req: Request, res: Response, next: nextF) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ message: 'All fields must be filled' });

  if (typeof email !== 'string' || typeof password !== 'string') {
    return res.status(401).json({ message });
  }

  const regex = /\S+@\S+.\S\.+com/;

  const loginUser = await Users.findOne({ where: { email } });

  if (!regex.test(email) || !loginUser) {
    return res.status(401).json({
      message });
  }

  if (password.length <= 6) {
    return res.status(401).json({ message });
  }

  if (!compareSync(password, loginUser.password)) {
    return res.status(401).json({ message });
  }

  next();
};

const validateToken = async (req: Request, res: Response, next: nextF) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const decodedToken = jwt.verify(token, secret);

    req.body.user = decodedToken;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

const validateMatch = async (req: Request, res: Response, next: nextF) => {
  const { homeTeamId, awayTeamId } = req.body;

  if (homeTeamId === awayTeamId) {
    return res
      .status(422)
      .json({
        message: 'It is not possible to create a match with two equal teams',
      });
  }
  next();
};

export default { validateLogin, validateToken, validateMatch };
