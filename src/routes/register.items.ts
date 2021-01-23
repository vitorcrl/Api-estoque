import { Router } from 'express';
// import multer from 'multer';
import { getCustomRepository } from 'typeorm';
import CreateItemsService from '../services/CreateItemsService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import itemRepository from '../repositories/ItemsRepository';

const registerItems = Router();

// const upload = multer();

registerItems.use(ensureAuthenticated);

registerItems.get('/', async (request, response) => {
  const itemsRepository = getCustomRepository(itemRepository);
  const items = await itemsRepository.find();

  return response.json(items);
});

registerItems.post('/', async (request, response) => {
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
// registerItems.put('/', async (request, response) => {})

export default registerItems;
