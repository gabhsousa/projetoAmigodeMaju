import { useState, useEffect } from "react";
import { listarProdutos } from "../services/productService";

export default function ListarProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function carregar() {
      const response = await listarProdutos();
      setProdutos(response);
    }

    carregar();
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {produtos.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nome}</td>
              <td>{p.preco}</td>
              <td>{p.categoriaNome}</td>
              <td>Editar / Excluir</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
