import { Router } from 'express';
import usersRouter from './users.routes';

const routerEstoque = Router();

routerEstoque.get('/', (request, response) => {
  return response.json({ message: 'hellodsds world' });
});

routerEstoque.use('/', usersRouter);

routerEstoque.put('/', (request, response) => {
  return response.json({ message: 'hello world' });
});

export default routerEstoque;
