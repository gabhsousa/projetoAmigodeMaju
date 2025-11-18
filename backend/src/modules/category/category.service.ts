import { CategoryRepository } from "./category.repository";

export class CategoryService {
  private repository = new CategoryRepository();

  async list() {
    return this.repository.findAll();
  }

  async show(id: number) {
    return this.repository.findById(id);
  }

  async create(data: any) {
    return this.repository.create(data);
  }

  async update(id: number, data: any) {
    return this.repository.update(id, data);
  }

  async delete(id: number) {
    return this.repository.delete(id);
  }
}
