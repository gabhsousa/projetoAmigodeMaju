import { useEffect, useState } from "react";
import { listarProdutos, excluirProduto } from "../services/productService";


export default function ListarProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function carregar() {
    try {
      const data = await listarProdutos();
      setProdutos(data);
    } catch (err) {
      console.error("Erro ao carregar produtos:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregar();
  }, []);

  async function handleDelete(id) {
    if (!confirm("Deseja realmente excluir este produto?")) return;

    await excluirProduto(id);
    carregar();
  }

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Lista de Produtos</h2>

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
              <td>R$ {Number(p.preco).toFixed(2)}</td>
              <td>{p.categoria?.nome || "Sem categoria"}</td>
              <td>
                <button>Editar</button>
                <button onClick={() => handleDelete(p.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
