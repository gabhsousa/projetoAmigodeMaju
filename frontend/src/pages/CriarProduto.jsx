import { useEffect, useState } from "react";
import API_URL from "../services/api";
import { listarCategorias } from "../services/categoryService";
import { useNavigate } from "react-router-dom";

export default function CriarProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [categorias, setCategorias] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function carregarCategorias() {
      try {
        const data = await listarCategorias();
        setCategorias(data);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      }
    }
    carregarCategorias();
  }, []);

  async function salvarProduto() {
    if (!nome || !preco || !categoria) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          preco: Number(preco),
          categoriaId: Number(categoria),
        }),
      });

      if (!response.ok) throw new Error("Erro ao criar produto");

      alert("Produto criado com sucesso!");
      navigate("/produtos");

    } catch (error) {
      console.error("Erro ao criar produto:", error);
      alert("Erro ao salvar o produto.");
    }
  }

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

          {categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.nome}
            </option>
          ))}
        </select>

        <button style={{ marginTop: 30 }} onClick={salvarProduto}>
          Salvar
        </button>
      </div>
    </div>
  );
}
