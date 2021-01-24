import { EntityRepository, Repository } from 'typeorm';

import Item from '../models/Items';

@EntityRepository(Item)
class UserItemsRepository extends Repository<Item> {
  public async findItems(user: string): Promise<Item> {
    const findItems = await this.findItems(user);

    return findItems;
  }
}
export default UserItemsRepository;
