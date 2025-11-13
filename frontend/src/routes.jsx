import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListarProdutos from "./pages/ListarProdutos";
import CriarProduto from "./pages/CriarProduto";
import EditarProduto from "./pages/EditarProduto";
import Navbar from "./components/Navbar";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListarProdutos />} />
        <Route path="/produtos/criar" element={<CriarProduto />} />
        <Route path="/produtos/editar/:id" element={<EditarProduto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
