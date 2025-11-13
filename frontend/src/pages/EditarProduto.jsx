import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function EditarProduto() {
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    async function carregarProduto() {
      try {
        const response = await api.get(`/produtos/${id}`);
        setNome(response.data.nome);
        setPreco(response.data.preco);
        setCategoria(response.data.categoria);
      } catch (error) {
        console.error("Erro ao carregar produto:", error);
      }
    }

    carregarProduto();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.put(`/produtos/${id}`, {
        nome,
        preco: Number(preco),
        categoria,
      });

      setMensagem("Produto atualizado com sucesso!");
    } catch (error) {
      console.error(error);
      setMensagem("Erro ao atualizar produto.");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Editar Produto {id}</h1>

      {mensagem && <p>{mensagem}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label><br />
          <input value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>

        <div>
          <label>Preço:</label><br />
          <input
            type="number"
            step="0.01"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Categoria:</label><br />
          <input
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: 10 }}>Salvar</button>
      </form>
    </div>
  );
}

export default EditarProduto;
