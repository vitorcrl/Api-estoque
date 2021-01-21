import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/users', async (request, response) => {
  try {
    const { user, email } = request.body;

    const createUser = new CreateUserService();
    const users = await createUser.execute({ user, email });

    return response.json(users);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default usersRouter;
