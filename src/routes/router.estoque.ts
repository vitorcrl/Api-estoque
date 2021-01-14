import { Router } from 'express';

const routerEstoque = Router();

routerEstoque.get('/', (request, response) => {
  return response.json({ message: 'hello world' });
});
routerEstoque.post('/estoque', (request, response) => {
  try {
    const { name, quantity } = request.body;
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});
export default routerEstoque;
