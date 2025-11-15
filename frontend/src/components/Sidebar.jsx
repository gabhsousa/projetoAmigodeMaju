import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const getLinkStyle = (path) => {
    return {
      ...link,
      color: isActive(path) ? '#ff7b00' : 'white',
      fontWeight: isActive(path) ? '600' : '400',
      borderLeft: isActive(path) ? '3px solid #ff7b00' : '3px solid transparent',
      background: isActive(path) ? '#222' : 'transparent',
    };
  };

  return (
    <div style={{
      width: '230px',
      background: '#111',
      padding: '25px 20px',
      borderRight: '1px solid #333',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      height: '100vh'
    }}>
      <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}><ion-icon name="restaurant-outline"></ion-icon> Restaurante</h2>

      <Link style={getLinkStyle('/')} to="/"><ion-icon name="stats-chart-outline"></ion-icon> Dashboard</Link>
      <Link style={getLinkStyle('/produtos')} to="/produtos"><ion-icon name="cube-outline"></ion-icon> Produtos</Link>
      <Link style={getLinkStyle('/pedidos')} to="/pedidos"><ion-icon name="receipt-outline"></ion-icon> Pedidos</Link>
      <Link style={getLinkStyle('/categorias')} to="/categorias"><ion-icon name="reader-outline"></ion-icon> Categorias</Link>
      <Link style={getLinkStyle('/configuracoes')} to="/configuracoes"><ion-icon name="settings-outline"></ion-icon> Configurações</Link>
    </div>
  );
}

const link = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '16px',
  padding: '8px 12px',
  paddingLeft: '12px',
  cursor: 'pointer',
  display: 'block',
  transition: 'all 0.2s ease',
  borderRadius: '16px',
};


