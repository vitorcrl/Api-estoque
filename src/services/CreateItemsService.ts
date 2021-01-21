import { getRepository } from 'typeorm';
import Items from '../models/Items';

interface RequestDTO {
  name: string;
  quantity: number;
  provider_id: string;
}

class CreateItemsService {
  public async execute({
    name,
    quantity,
    provider_id,
  }: RequestDTO): Promise<Items> {
    const itemRepository = getRepository(Items);

    const checkUsersExists = await itemRepository.findOne({
      where: { provider_id },
    });
    if (checkUsersExists) {
      throw new Error('Usuario not found');
    }
    const items = itemRepository.create({
      name,
      quantity,
      provider_id,
    });
    await itemRepository.save(items);
    return items;
  }
}
export default CreateItemsService;
