import { useState } from "react";
import api from "../services/api";

function CriarProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/produtos", {
        nome,
        preco: Number(preco),
        categoria,
      });

      setMensagem("Produto criado com sucesso!");
      setNome("");
      setPreco("");
      setCategoria("");
    } catch (error) {
      console.error(error);
      setMensagem("Erro ao criar produto.");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Criar Produto</h1>

      {mensagem && <p>{mensagem}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label><br />
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
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

        <button type="submit" style={{ marginTop: "10px" }}>
          Criar
        </button>
      </form>
    </div>
  );
}

export default CriarProduto;
