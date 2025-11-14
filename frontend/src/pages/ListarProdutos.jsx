import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../services/api';

export default function ListarProdutos() {

  const [produtos, setProdutos] = useState([]);

  async function carregar() {
    // Quando conectar com o backend vai funcionar:
    // const r = await api.get('/produtos');
    // setProdutos(r.data);

    // TEMPORÁRIO (mock)
    setProdutos([
      { id: 1, nome: "Pizza", preco: 39.90, imagem: null },
      { id: 2, nome: "Hambúrguer", preco: 24.50, imagem: null }
    ]);
  }

  useEffect(() => {
    carregar();
  }, []);

  const btnEditar = {
    background: '#444',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '6px'
  };

  const btnNova = {
    background: '#ff7b00',
    color: 'white',
    padding: '10px 16px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  const imagemStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "6px",
    objectFit: "cover"
  };

  return (
    <div style={{ padding: "20px" }}>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h1>Produtos</h1>

        <Link to="/produtos/criar" style={btnNova}>+ Novo Produto</Link>
      </div>

      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Foto</th>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {produtos.map(p => (
            <tr key={p.id}>
              <td>
                <img
                  src={p.imagem || "https://via.placeholder.com/60"}
                  alt="produto"
                  style={imagemStyle}
                />
              </td>

              <td>{p.id}</td>
              <td>{p.nome}</td>
              <td>R$ {p.preco.toFixed(2)}</td>

              <td>
                <Link to={`/produtos/editar/${p.id}`}>
                  <button style={btnEditar}>Editar</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
