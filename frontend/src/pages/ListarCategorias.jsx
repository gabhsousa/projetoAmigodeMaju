import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Importamos o serviço que já funciona
import { listarCategorias, excluirCategoria } from "../services/categoryService"; 

export default function ListarCategorias() {
  // Começamos com array vazio [] para o .length nunca quebrar
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarDados();
  }, []);

  async function carregarDados() {
    try {
      console.log("Buscando categorias...");
      const dados = await listarCategorias();
      
      // PROTEÇÃO DE OURO:
      // Se 'dados' for uma lista, usa ela. Se for nulo/undefined, usa [].
      if (Array.isArray(dados)) {
        setCategorias(dados);
      } else {
        console.warn("Banco não retornou lista:", dados);
        setCategorias([]); 
      }
    } catch (error) {
      console.error("Erro fatal:", error);
      // Não deixamos a tela preta, apenas logamos o erro
    } finally {
      setLoading(false);
    }
  }

  async function deletar(id) {
    if (!confirm("Tem certeza que deseja excluir?")) return;
    try {
      await excluirCategoria(id);
      alert("Categoria excluída!");
      carregarDados(); // Atualiza a lista
    } catch (error) {
      alert("Erro ao excluir.");
    }
  }

  if (loading) {
    return <div style={{ padding: "40px", color: "white" }}>Carregando dados...</div>;
  }

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", alignItems: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "700" }}>Categorias</h1>
        <Link 
          to="/categorias/criar" 
          style={{ 
            backgroundColor: "#ffb300",
            color: "black",
            padding: "12px 22px",
            borderRadius: "10px",
            fontWeight: "600",
            boxShadow: "0px 0px 15px rgba(255,179,0,0.4)",
            textDecoration: "none"
          }}
        >
          + Nova Categoria
        </Link>
      </div>

      {categorias.length === 0 ? (
        <p>Nenhuma categoria encontrada. Clique em "Nova Categoria" para criar.</p>
      ) : (
        <div
          style={{
            backgroundColor: "#0f0f16",
            border: "1px solid #1d1d29",
            borderRadius: "16px",
            padding: "25px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
          }}
        >
          <div style={{
            background: "#121216",
            padding: "18px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.03)",
          }}>
            <table style={{ width: "100%", borderCollapse: "collapse", color: "white" }}>
              <thead>
                <tr style={{ color: "#b5b5c1", borderBottom: "1px solid #1d1d29", textAlign: "left" }}>
                  <th style={{ padding: "12px 10px" }}>ID</th>
                  <th style={{ padding: "12px 10px" }}>Nome</th>
                  <th style={{ padding: "12px 10px" }}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {categorias.map((cat) => (
                  <tr key={cat.id || Math.random()} style={{ borderBottom: "1px solid #1d1d29", height: "56px" }}>
                    <td style={{ padding: "10px" }}>{cat.id}</td>
                    <td style={{ padding: "10px" }}>{cat.nome}</td>
                    <td style={{ padding: "10px" }}>
                      <Link 
                        to={`/categorias/editar/${cat.id}`}
                        style={{
                          background: "#2b2b30",
                          color: "#ff6b2d",
                          padding: "8px 12px",
                          borderRadius: "8px",
                          textDecoration: "none",
                          marginRight: "8px",
                          border: "1px solid rgba(255,255,255,0.04)",
                          fontWeight: 600,
                          fontSize: "14px",
                          display: "inline-block"
                        }}
                      >
                        Editar
                      </Link>
                      <button 
                        onClick={() => deletar(cat.id)}
                        style={{ 
                          background: "#ff6b2d", 
                          color: "white", 
                          border: "none", 
                          padding: "8px 12px", 
                          borderRadius: "8px", 
                          cursor: "pointer",
                          fontWeight: 700,
                          fontSize: "14px"
                        }}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}