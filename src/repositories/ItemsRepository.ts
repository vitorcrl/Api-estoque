import { EntityRepository, Repository } from 'typeorm';

import Item from '../models/Items';
// responsavel por fazer as alteracoes no Banco de dados

@EntityRepository(Item) // extende o repositorio e passa o parametros
class itemRepository extends Repository<Item> {
  public async findOne(user: string): Promise<Item | null> {
    const findItem = await this.findOne(user);

    return findItem || null;
  }
}
export default itemRepository;
