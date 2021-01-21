import { Router } from 'express';
import CreateItemsService from '../services/CreateItemsService';

const registerItems = Router();

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
