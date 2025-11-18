import API_URL from "./api";

export async function listarCategorias() {
  const response = await fetch(`${API_URL}/categories`);
  if (!response.ok) throw new Error("Erro ao buscar categorias");
  return response.json();
}

export async function criarCategoria(data: any) {
  const response = await fetch(`${API_URL}/categories`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Erro ao criar categoria");
  return response.json();
}

export async function atualizarCategoria(id: number, data: any) {
  const response = await fetch(`${API_URL}/categories/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Erro ao atualizar categoria");
  return response.json();
}

export async function excluirCategoria(id: number) {
  const response = await fetch(`${API_URL}/categories/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error("Erro ao excluir categoria");
  return true;
}

export const getCategorias = listarCategorias; // compatibilidade com CriarProduto
