import { Router } from 'express';

import { getCustomRepository } from 'typeorm';
import CreateItemsService from '../services/CreateItemsService';
import AlterItemService from '../services/AlterItemService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import itemRepository from '../repositories/ItemsRepository';

const registerItems = Router();

registerItems.use(ensureAuthenticated);

registerItems.get('/', async (request, response) => {
  const { name, user } = request.body;
  const itemsRepository = getCustomRepository(itemRepository);
  const items = await itemsRepository.find({ where: { name, user } });
  return response.json(items);
});

registerItems.post('/items', async (request, response) => {
  try {
    const { name, quantity, user } = request.body;
    const registerItem = new CreateItemsService();
    const listItems = await registerItem.execute({
      name,
      quantity,
      user,
    });

    return response.json(listItems);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});
registerItems.put('/', async (request, response) => {
  try {
    const { id, quantity, user } = request.body;

    const registerItem = new AlterItemService();
    const alterItem = await registerItem.execute({ id, quantity, user });
    return response.json(alterItem);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default registerItems;
