import { getRepository } from 'typeorm';
import Item from '../models/Items';
import User from '../models/Users';

interface Request {
  id: string;
  quantity: number;
  user: User;
}
class AlterItemService {
  public async execute({ id, quantity, user }: Request): Promise<void> {
    const alterRepository = getRepository(Item);

    const alterItem = await alterRepository.findOne(id);
    if (!alterItem) {
      throw new Error('Not possible to find item');
    }
    if (alterRepository) {
      await alterRepository.update(quantity, user);
    }
    await alterRepository.save(alterItem);
  }
}
export default AlterItemService;
