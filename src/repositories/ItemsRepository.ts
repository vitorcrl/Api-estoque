import Item from '../models/Items';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Item)
class ItemRepository extends Repository<Item> {}
