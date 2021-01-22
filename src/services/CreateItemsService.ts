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

    const checkUser = await itemRepository.findOne({ where: { user } });
    if (checkUser) {
      throw new Error('User not exist');
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
