import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Certifique-se que o orderService.ts existe (criamos ele no passo anterior)
import { listarPedidos, atualizarStatusPedido } from "../services/orderService";

export default function ListarPedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);

  useEffect(() => {
    carregarPedidos();
  }, []);

  async function carregarPedidos() {
    try {
      const dados = await listarPedidos();
      if (Array.isArray(dados)) {
        setPedidos(dados);
      } else {
        setPedidos([]);
      }
    } catch (error) {
      console.error("Erro ao listar:", error);
    } finally {
      setLoading(false);
    }
  }

  async function mudarStatus(id, novoStatus) {
    try {
      await atualizarStatusPedido(id, novoStatus);
      alert("Status atualizado!");
      carregarPedidos();
      setPedidoSelecionado(null);
    } catch (error) {
      alert("Erro ao atualizar status.");
    }
  }

  const getStatusColor = (status) => {
    if (status === "finalizado") return "green";
    if (status === "em preparo") return "blue";
    return "orange";
  };

  if (loading) return <div style={{ padding: "40px", color: "white" }}>Carregando pedidos...</div>;

  return (
    <div style={{ padding: "40px", color: "white" }}>
      
      {/* CABEÇALHO COM O BOTÃO NOVO */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", alignItems: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "700" }}>Pedidos</h1>
        <Link 
          to="/pedidos/criar" 
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
          + Novo Pedido
        </Link>
      </div>

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
                <th style={{ padding: "12px 10px" }}>Nº</th>
                <th style={{ padding: "12px 10px" }}>Cliente</th>
                <th style={{ padding: "12px 10px" }}>Total</th>
                <th style={{ padding: "12px 10px" }}>Status</th>
                <th style={{ padding: "12px 10px" }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((pedido) => (
                <tr key={pedido.id} style={{ borderBottom: "1px solid #1d1d29", height: "56px" }}>
                  <td style={{ padding: "10px" }}>{pedido.id}</td>
                  <td style={{ padding: "10px" }}>{pedido.cliente || "Balcão"}</td>
                  <td style={{ padding: "10px" }}>R$ {Number(pedido.total).toFixed(2)}</td>
                  <td style={{ padding: "10px" }}>
                    <span style={{ background: getStatusColor(pedido.status), padding: "5px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: "bold" }}>
                      {pedido.status}
                    </span>
                  </td>
                  <td style={{ padding: "10px" }}>
                    <button 
                      onClick={() => setPedidoSelecionado(pedido)} 
                      style={{ 
                        background: "#2b2b30", 
                        color: "#ff6b2d", 
                        border: "1px solid rgba(255,255,255,0.04)", 
                        padding: "8px 12px", 
                        borderRadius: "8px", 
                        cursor: "pointer",
                        fontWeight: 600,
                        fontSize: "14px"
                      }}
                    >
                      Ver detalhes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL DE DETALHES */}
      {pedidoSelecionado && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.8)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }}>
          <div style={{ background: "#333", padding: "30px", borderRadius: "10px", width: "500px", maxWidth: "90%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2>Detalhes #{pedidoSelecionado.id}</h2>
              <button onClick={() => setPedidoSelecionado(null)} style={{ background: "transparent", border: "none", color: "white", fontSize: "20px", cursor: "pointer" }}>✖</button>
            </div>
            <p><strong>Status:</strong> {pedidoSelecionado.status}</p>
            
            <h3 style={{ marginTop: "20px", borderBottom: "1px solid #555" }}>Itens</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {pedidoSelecionado.itens && pedidoSelecionado.itens.length > 0 ? (
                pedidoSelecionado.itens.map((item, index) => (
                  <li key={index} style={{ padding: "8px 0", borderBottom: "1px solid #444", display: "flex", justifyContent: "space-between" }}>
                    <span>{item.produto?.nome || "Produto"} (x{item.quantidade})</span>
                    <span>R$ {Number(item.preco).toFixed(2)}</span>
                  </li>
                ))
              ) : ( <li style={{ padding: "10px", color: "#aaa" }}>Itens não carregados.</li> )}
            </ul>

            <div style={{ marginTop: "20px", textAlign: "right", fontSize: "18px", fontWeight: "bold" }}>
              Total: R$ {Number(pedidoSelecionado.total).toFixed(2)}
            </div>

            <div style={{ marginTop: "25px", display: "flex", gap: "10px", justifyContent: "flex-end" }}>
              <button onClick={() => mudarStatus(pedidoSelecionado.id, "finalizado")} style={{ background: "#2b2b30", color: "#ff6b2d", padding: "8px 12px", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "8px", cursor: "pointer", fontWeight: 600, fontSize: "14px" }}>Finalizar</button>
              <button onClick={() => setPedidoSelecionado(null)} style={{ background: "#2b2b30", color: "#ff6b2d", padding: "8px 12px", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "8px", cursor: "pointer", fontWeight: 600, fontSize: "14px" }}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}