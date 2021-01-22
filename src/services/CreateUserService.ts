import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/Users';

interface RequestDTO {
  user: string;
  password: string;
}

class CreateUserService {
  public async execute({ user, password }: RequestDTO): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUsersExists = await usersRepository.findOne({
      where: { user },
    });
    if (checkUsersExists) {
      throw new Error('Username already used');
    }
    const hashedPassword = await hash(password, 8);

    const users = usersRepository.create({
      user,
      password: hashedPassword,
    });
    await usersRepository.save(users);
    return users;
  }
}
export default CreateUserService;
