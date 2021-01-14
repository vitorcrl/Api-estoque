import { Router } from 'express';

const routerEstoque = Router();

routerEstoque.get('/', (request, response) => {
  return response.json({ message: 'hellodsds world' });
});
routerEstoque.post('/estoque', (request, response) => {
  return response.json({ message: 'helloo0ooworld' });
});

routerEstoque.put('/put', (request, response) => {
  return response.json({ message: 'hello world' });
});

export default routerEstoque;
