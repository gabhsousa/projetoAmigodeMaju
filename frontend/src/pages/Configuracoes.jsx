import { useState } from "react";

export default function Configuracoes() {
  const [nome, setNome] = useState("");
  const [logo, setLogo] = useState("");
  const [tema, setTema] = useState("dark");
  const [endereco, setEndereco] = useState("");
  const [horario, setHorario] = useState("");

  function salvar(e) {
    e.preventDefault();
    // sem backend ainda
    alert("As configurações só serão salvas quando o backend estiver pronto!");
  }

  return (
    <div style={container}>
      <h1 style={title}>Configurações</h1>

      <div style={contentWrapper}>
        {/* MENU LATERAL */}
        <aside style={menuBox}>
          <h3 style={menuTitle}>Menu</h3>

          <ul style={menuList}>
            <li style={menuItem}>Informações gerais</li>
            <li style={menuItem}>Aparência</li>
            <li style={menuItem}>Endereço</li>
            <li style={menuItem}>Horários</li>
          </ul>
        </aside>

        {/* PAINEL DE FORMULÁRIO */}
        <main style={formBox}>
          <h2 style={formTitle}>Informações do Restaurante</h2>

          <form onSubmit={salvar}>
            <div style={formGroup}>
              <label style={label}>Nome do Restaurante:</label>
              <input
                style={input}
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div style={formGroup}>
              <label style={label}>URL do Logotipo:</label>
              <input
                style={input}
                type="text"
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
              />
            </div>

            <div style={formGroup}>
              <label style={label}>Tema:</label>
              <select
                style={input}
                value={tema}
                onChange={(e) => setTema(e.target.value)}
              >
                <option value="dark">Escuro</option>
                <option value="light">Claro</option>
              </select>
            </div>

            <div style={formGroup}>
              <label style={label}>Endereço:</label>
              <input
                style={input}
                type="text"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </div>

            <div style={formGroup}>
              <label style={label}>Horário de Funcionamento:</label>
              <input
                style={input}
                type="text"
                placeholder="Ex: 08:00 - 22:00"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
              />
            </div>

            <button type="submit" style={button}>Salvar Configurações</button>
          </form>
        </main>
      </div>
    </div>
  );
}

/* ------------------ STYLES ------------------ */

const container = {
  width: "100%",
  maxWidth: "1200px",     // <--- limita a largura do conteúdo
  margin: "0 auto",       // <--- centraliza o container dentro do AdminLayout
  padding: "30px 40px",
  color: "white",
  boxSizing: "border-box"
};

const title = {
  fontSize: "42px",
  marginBottom: "30px",
};

const contentWrapper = {
  display: "grid",
  gridTemplateColumns: "340px 1fr", // deixa a coluna lateral fixa e a direita flexível
  gap: "36px",
  width: "100%",
  alignItems: "start"
};

const menuBox = {
  background: "#1b1b1b",
  padding: "24px",
  borderRadius: "10px",
  border: "1px solid #333",
  height: "fit-content",
};

const menuTitle = {
  fontSize: "20px",
  marginBottom: "12px",
};

const menuList = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const menuItem = {
  fontSize: "15px",
  padding: "12px 0",
  cursor: "pointer",
  color: "#cfcfcf",
};

const formBox = {
  background: "#1b1b1b",
  padding: "28px",
  borderRadius: "10px",
  border: "1px solid #333",
  width: "100%",
  boxSizing: "border-box"
};

const formTitle = {
  fontSize: "22px",
  marginBottom: "18px",
};

const formGroup = {
  marginBottom: "16px",
};

const label = {
  display: "block",
  marginBottom: "8px",
  fontSize: "14px",
  color: "#ddd"
};

const input = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #444",
  background: "#0f0f0f",
  color: "white",
  fontSize: "15px",
  boxSizing: "border-box"
};

const button = {
  marginTop: "14px",
  padding: "12px 28px",
  background: "#ff7a00",
  border: "none",
  color: "white",
  fontSize: "16px",
  borderRadius: "8px",
  cursor: "pointer",
};
