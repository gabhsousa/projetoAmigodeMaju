import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

import Dashboard from "./pages/Dashboard";

import ListarProdutos from "./pages/ListarProdutos";
import CriarProduto from "./pages/CriarProduto";
import EditarProduto from "./pages/EditarProduto";

import ListarCategorias from "./pages/ListarCategorias";
import CriarCategoria from "./pages/CriarCategoria";
import EditarCategoria from "./pages/EditarCategoria";

import ListarPedidos from "./pages/ListarPedidos";
import CriarPedido from "./pages/CriarPedido"; // <--- IMPORT NOVO
import Configuracoes from "./pages/Configuracoes";

export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot" element={<ForgotPassword />} />

      <Route path="/" element={<RequireAuth><AdminLayout><Dashboard /></AdminLayout></RequireAuth>} />

      {/* PRODUTOS */}
      <Route path="/produtos" element={<RequireAuth><AdminLayout><ListarProdutos /></AdminLayout></RequireAuth>} />
      <Route path="/produtos/criar" element={<RequireAuth><AdminLayout><CriarProduto /></AdminLayout></RequireAuth>} />
      <Route path="/produtos/editar/:id" element={<RequireAuth><AdminLayout><EditarProduto /></AdminLayout></RequireAuth>} />

      {/* CATEGORIAS */}
      <Route path="/categorias" element={<RequireAuth><AdminLayout><ListarCategorias /></AdminLayout></RequireAuth>} />
      <Route path="/categorias/criar" element={<RequireAuth><AdminLayout><CriarCategoria /></AdminLayout></RequireAuth>} />
      <Route path="/categorias/editar/:id" element={<RequireAuth><AdminLayout><EditarCategoria /></AdminLayout></RequireAuth>} />

      {/* PEDIDOS */}
      <Route path="/pedidos" element={<RequireAuth><AdminLayout><ListarPedidos /></AdminLayout></RequireAuth>} />
      <Route path="/pedidos/criar" element={<RequireAuth><AdminLayout><CriarPedido /></AdminLayout></RequireAuth>} /> {/* <--- ROTA NOVA */}

      {/* CONFIGURAÇÕES */}
      <Route path="/configuracoes" element={<RequireAuth><AdminLayout><Configuracoes /></AdminLayout></RequireAuth>} />

      {/* catch-all: redirect to / if logged in, else /login */}
      <Route path="*" element={<CheckRedirect />} />

    </Routes>
  );
}

function RequireAuth({ children }: { children: any }) {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (!token) return <Navigate to="/login" replace />;
  return children;
}

function CheckRedirect() {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return token ? <Navigate to="/" replace /> : <Navigate to="/login" replace />;
}