import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      padding: "15px",
      background: "#111",
      display: "flex",
      gap: "20px"
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Lista de Produtos
      </Link>

      <Link to="/produtos/criar" style={{ color: "white", textDecoration: "none" }}>
        Criar Produto
      </Link>
    </nav>
  );
}

export default Navbar;
