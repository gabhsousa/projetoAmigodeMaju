import { prisma } from "../../prisma";


export class ProductRepository {
  list() {
    return prisma.produto.findMany();
  }

  show(id: number) {
    return prisma.produto.findUnique({ where: { id } });
  }

  create(data: any) {
    return prisma.produto.create({ data });
  }

  update(id: number, data: any) {
    return prisma.produto.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.produto.delete({ where: { id } });
  }
}
