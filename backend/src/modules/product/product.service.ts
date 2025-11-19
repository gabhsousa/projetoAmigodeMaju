import { ProductRepository } from "./product.repository";

export class ProductService {
  private repo = new ProductRepository();

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
