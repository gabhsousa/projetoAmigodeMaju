import { useState } from "react";

export default function CriarProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");

  return (
    <div>
      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>Criar Produto</h1>

      <div style={{ marginTop: 20 }}>
        <label>Nome</label>
        <input
          style={{ display: "block", marginTop: 5 }}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label style={{ marginTop: 20 }}>Preço</label>
        <input
          type="number"
          style={{ display: "block", marginTop: 5 }}
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />

        <label style={{ marginTop: 20 }}>Categoria</label>
        <select
          style={{ display: "block", marginTop: 5 }}
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Selecione...</option>
        </select>

        <button style={{ marginTop: 30 }}>
          Salvar
        </button>
      </div>
    </div>
  );
}