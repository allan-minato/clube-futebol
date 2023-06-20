// import { compareSync } from 'bcryptjs';
// import User from '../database/models/User';
// import LoginInterface from '../Interfaces/ILogin';
// import { sign } from '../helpers/jwt';

// export default class LoginService implements LoginInterface {
//   private readonly model: typeof User = User;

//   public login = async (email: string, password: string): Promise<string> => {
//     const user = await this.model.findOne({
//       where: { email },
//     });

//     if (!user || !compareSync(password, user.password)) {
//       const error = new Error('Incorrect email or password');
//       error.name = 'Unauthorized';
//       throw error;
//     }
//     const { username, role, id } = user;

//     const token = sign({ username, role, id, email });

//     return token;
//   };

//   public findRole = async (email: string): Promise<{ role: string } | void> => {
//     const user = await this.model.findOne({ where: { email } });
//     if (user) return { role: user.role };
//   };
// }
