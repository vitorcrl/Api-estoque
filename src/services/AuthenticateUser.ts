import { compare } from 'bcryptjs';
import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

import User from '../models/Users';

interface Request {
  user: string;
  password: string;
}
interface Response {
  auth: User;
  token: string;
}
class AuthenticateUser {
  public async execute({ user, password }: Request): Promise<Response> {
    const userRepository = getRepository(User);

    const auth = await userRepository.findOne({ where: { user } });
    if (!auth) {
      throw new Error('Incorrect User/Password Combination');
    }
    const passwordMatch = await compare(password, auth.password);
    if (!passwordMatch) {
      throw new Error('Incorrect User/Password Combination');
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: auth.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return { auth, token };
  }
}

export default AuthenticateUser;
