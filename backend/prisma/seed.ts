import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
 
  // 1. Criar categorias
 
  const categorias = await prisma.categoria.createMany({
    data: [
      { nome: "Pizzas", descricao: "Variedade de pizzas artesanais" },
      { nome: "Lanches", descricao: "Hambúrgueres e sanduíches" },
      { nome: "Massas", descricao: "Macarronadas e pratos italianos" },
      { nome: "Prato Feito", descricao: "PFs completos" },
      { nome: "Salgados", descricao: "Salgados gourmet" },
    ],
  });

  console.log("Categorias criadas!");

  // pegar IDs das categorias criadas
  const pizzas = await prisma.categoria.findFirst({ where: { nome: "Pizzas" } });
  const lanches = await prisma.categoria.findFirst({ where: { nome: "Lanches" } });
  const massas = await prisma.categoria.findFirst({ where: { nome: "Massas" } });
  const pratoFeito = await prisma.categoria.findFirst({ where: { nome: "Prato Feito" } });
  const salgados = await prisma.categoria.findFirst({ where: { nome: "Salgados" } });

  
  // 2. Criar produtos
  
  await prisma.produto.createMany({
    data: [
      { nome: "Pizza Margherita", preco: 29.90, estoque: 10, categoriaId: pizzas!.id },
      { nome: "Hambúrguer Artesanal", preco: 24.50, estoque: 15, categoriaId: lanches!.id },
      { nome: "Macarronada Bolonhesa", preco: 21.90, estoque: 20, categoriaId: massas!.id },
      { nome: "Peixe Frito com Arroz", preco: 27.00, estoque: 12, categoriaId: pratoFeito!.id },
      { nome: "Coxinha Gourmet", preco: 8.00, estoque: 40, categoriaId: salgados!.id },
    ],
  });

  console.log("5 produtos cadastrados!");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error("Erro no seed:", e);
    prisma.$disconnect();
  });
