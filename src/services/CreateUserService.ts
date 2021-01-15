import { getRepository } from 'typeorm';
import User from '../models/Users';

interface RequestDTO {
  name: string;
  email: string;
}

class CreateUserService {
  public async execute({ name, email }: RequestDTO): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUsersExists = await usersRepository.findOne({
      where: { email },
    });
    if (checkUsersExists) {
      throw new Error('email address already exists');
    }
    const user = usersRepository.create({
      name,
      email,
    });
    await usersRepository.save(user);
    return user;
  }
}
export default CreateUserService;
