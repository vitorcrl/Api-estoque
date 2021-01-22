import { Router } from 'express';
import CreateItemsService from '../services/CreateItemsService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import { getCustomRepository } from 'typeorm';
import itemRepository from '../repositories/ItemsRepository';

const registerItems = Router();

registerItems.use(ensureAuthenticated);

registerItems.get('/', async (request, response) => {
  const itemsRepository = getCustomRepository(itemRepository);
  return response.json(itemsRepository);
});

registerItems.post('/', async (request, response) => {
  try {
    const { name, quantity, user } = request.body;

    const registerItem = new CreateItemsService();

    const listItems = await registerItem.execute({ name, quantity, user });

    return response.send(listItems);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default registerItems;
