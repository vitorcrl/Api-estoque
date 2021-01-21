import { getRepository } from 'typeorm';
import User from '../models/Users';

interface RequestDTO {
  user: string;
  email: string;
}

class CreateUserService {
  public async execute({ user, email }: RequestDTO): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUsersExists = await usersRepository.findOne({
      where: { email },
    });
    if (checkUsersExists) {
      throw new Error('email address already exists');
    }
    const users = usersRepository.create({
      user,
      email,
    });
    await usersRepository.save(users);
    return users;
  }
}
export default CreateUserService;
