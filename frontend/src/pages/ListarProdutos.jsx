import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function ListarProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function carregar() {
    try {
      const response = await api.get("/produtos");
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregar();
  }, []);

  async function handleDelete(id) {
    const confirmar = window.confirm("Tem certeza que deseja excluir este produto?");
    if (!confirmar) return;

    try {
      await api.delete(`/produtos/${id}`);
      setProdutos((antigos) => antigos.filter((produto) => produto.id !== id));
    } catch (e) {
      console.error("Erro ao excluir:", e);
      alert("Erro ao excluir produto.");
    }
  }

  if (loading) {
    return <p style={{ padding: "20px" }}>Carregando...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Produtos</h1>

      <table border="1" cellPadding="10" cellSpacing="0">
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
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>R$ {produto.preco}</td>
              <td>{produto.categoria}</td>
              <td>
                <Link to={`/produtos/editar/${produto.id}`} style={{ marginRight: "8px" }}>
                  Editar
                </Link>
                <button onClick={() => handleDelete(produto.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarProdutos;
