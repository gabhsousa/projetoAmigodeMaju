import { OrderRepository } from "./order.repository";

export class OrderService {
  private repo = new OrderRepository();

  list() {
    return this.repo.list();
  }

  show(id: number) {
    return this.repo.show(id);
  }

  create(data: any) {
    return this.repo.create(data);
  }

  update(id: number, data: any) {
    return this.repo.update(id, data);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}
