import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import UserItemsRepository from '../repositories/userItemsRepository';

const usersItemsRouter = Router();

usersItemsRouter.get('/', async (request, response) => {
  const { user } = request.body;
  console.log(request.body);
  const showUser = getCustomRepository(UserItemsRepository);
  const users = await showUser.find({ where: { user } });
  return response.json(users);
});

export default usersItemsRouter;
