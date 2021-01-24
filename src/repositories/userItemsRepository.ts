import { EntityRepository, Repository } from 'typeorm';

import Item from '../models/Items';
import User from '../models/Users';
// responsavel por fazer as alteracoes no Banco de dados

@EntityRepository(Item) // extende o repositorio e passa o parametros
class UserItemsRepository extends Repository<Item> {
  public async findItems(user: string): Promise<Item> {
    const findItems = await this.findItems(user);

    return findItems;
  }
}
export default UserItemsRepository;
