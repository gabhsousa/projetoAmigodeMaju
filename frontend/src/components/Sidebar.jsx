import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const linkStyle = (path) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: isActive(path) ? "#ff7b00" : "#fff",
    textDecoration: "none",
    padding: "12px 14px",
    background: isActive(path) ? "#222" : "transparent",
    borderRadius: "12px",
    fontWeight: isActive(path) ? "600" : "400",
    borderLeft: isActive(path) ? "3px solid #ff7b00" : "3px solid transparent",
    transition: "0.2s"
  });

  return (
    <div
      style={{
        width: "240px",
        background: "#111",
        padding: "28px 20px",
        borderRight: "1px solid #222",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "100vh"
      }}
    >
      <h2 style={{ fontSize: "20px", fontWeight: 700 }}>🍽 Restaurante</h2>

      <Link to="/" style={linkStyle("/")}>
        📊 Dashboard
      </Link>

      <Link to="/produtos" style={linkStyle("/produtos")}>
        📦 Produtos
      </Link>

      <Link to="/pedidos" style={linkStyle("/pedidos")}>
        🧾 Pedidos
      </Link>

      <Link to="/categorias" style={linkStyle("/categorias")}>
        🎯 Categorias
      </Link>

      <Link to="/configuracoes" style={linkStyle("/configuracoes")}>
        ⚙ Configurações
      </Link>
    </div>
  );
}
