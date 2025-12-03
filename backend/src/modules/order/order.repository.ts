import { prisma } from "../../prisma";

export class OrderRepository {
  
  list() {
    return prisma.pedido.findMany({
     
    });
  }

  // BUSCAR UM: Também trazemos a categoria aqui
  show(id: number) {
   
    return prisma.pedido.findUnique({
      where: { id },
      include: {
        itens:true,
        cliente:true
      },
    });
  }

  create(data: any) {
    return prisma.pedido.create({ data });
  }

  update(id: number, data: any) {
    return prisma.pedido.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.pedido.delete({ where: { id } });
  }
}