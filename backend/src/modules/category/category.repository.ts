import { prisma } from "../../prisma";




export class CategoryRepository {
  async findAll() {
    return prisma.categoria.findMany();
  }

  async findById(id: number) {
    return prisma.categoria.findUnique({ where: { id } });
  }

  async create(data: { nome: string; descricao?: string }) {
    return prisma.categoria.create({ data });
  }

  async update(id: number, data: any) {
    return prisma.categoria.update({ where: { id }, data });
  }

  async delete(id: number) {
    return prisma.categoria.delete({ where: { id } });
  }
}
