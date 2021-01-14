import { v4 as uuid } from 'uuid';

class Estoque {
  id: string;

  name: string;

  quantity: number;

  constructor({ name, quantity }: Omit<Estoque, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.quantity = quantity;
  }
}
export default Estoque;
