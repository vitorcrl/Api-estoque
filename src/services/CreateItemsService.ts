import { getRepository } from 'typeorm';
import Item from '../models/Items';

interface RequestDTO {
  name: string;
  quantity: number;
  user: string;
}

class CreateItemsService {
  public async execute({ name, quantity, user }: RequestDTO): Promise<Item> {
    const itemRepository = getRepository(Item);

    const checkQuantity = await itemRepository.findOne({ where: { quantity } });
    if (checkQuantity || quantity <= 0) {
      throw new Error('Minimum quantity of 1 unit ');
    }

    const items = itemRepository.create({
      name,
      quantity,
      user,
    });
    await itemRepository.save(items);
    return items;
  }
}
export default CreateItemsService;
