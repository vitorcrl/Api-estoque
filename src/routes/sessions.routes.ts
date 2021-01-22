import { Router } from 'express';
import AuthenticateUser from '../services/AuthenticateUser';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { user, password } = request.body;

  const authenticateUser = new AuthenticateUser();

  const responseAuth = await authenticateUser.execute({
    user,
    password,
  });

  delete user.password;

  return response.json(responseAuth);
});

export default sessionsRouter;
