import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/users', async (request, response) => {
  try {
    const { name, email } = request.body;

    const createUser = new CreateUserService();
    const user = await createUser.execute({ name, email });

    return response.json(user);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default usersRouter;
