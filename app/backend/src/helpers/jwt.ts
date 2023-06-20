import * as jwt from 'jsonwebtoken';
import User from '../Interfaces/IUsers';

type message = {
  message: string,
};

const secret = process.env.JWT_SECRET || 'CORINTHIANS';

if (!secret) {
  throw new Error('Falta JWT_SECRET no .env');
}

export const sign = (payload: User | message): string => jwt.sign(payload, secret);

export const compare = (token: string): User => {
  const data = jwt.verify(token, secret);
  return data as User;
};

//
