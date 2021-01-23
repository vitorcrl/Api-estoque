import { EntityRepository, Repository } from 'typeorm';

import Item from '../models/Items';
import User from '../models/Users';
// responsavel por fazer as alteracoes no Banco de dados

@EntityRepository(Item) // extende o repositorio e passa o parametros
class itemRepository extends Repository<Item> {
  public async findItems(
    name: string,
    quantity: number,
    user: User,
  ): Promise<Item[]> {
    const findItems = await this.find({ where: { name, quantity, user } });

    return findItems || null;
  }
}
export default itemRepository;
