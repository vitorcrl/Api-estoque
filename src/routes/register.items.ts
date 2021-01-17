import { Router } from 'express';

const registerItems = Router();

registerItems.get('/', async (request, response) => {
  const { name, quantity, user } = request.body;
});

export default registerItems;
