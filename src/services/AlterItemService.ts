import { getRepository } from 'typeorm';
import Item from '../models/Items';
import User from '../models/Users';

interface Request {
  id: string;
  quantity: number;
  user: User;
}
class AlterItemService {
  public async execute({ id, quantity, user }: Request): Promise<Item> {
    const alterRepository = getRepository(Item);

    const alterItem = await alterRepository.findOne(id);
    if (!alterItem) {
      throw new Error('Not possible to find item');
    }
    if (alterItem) {
      await alterRepository.softDelete({ quantity });
      await alterRepository.create({ quantity });
    }
    await alterRepository.save(alterItem);
    return alterItem;
  }
}
export default AlterItemService;
