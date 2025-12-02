import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !senha) {
      setError("Preencha todos os campos.");
      return;
    }
    if (senha !== confirm) {
      setError("As senhas não coincidem.");
      return;
    }

    // Simulação de cadastro: aqui você chamaria a API para criar usuário
    localStorage.setItem("token", "demo-token");
    navigate("/");
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.logo}>🍴</div>
        <h2 style={styles.title}>Criar Conta</h2>
        <p style={styles.subtitle}>Preencha os dados para criar sua conta</p>
      </div>

      <form style={styles.card} onSubmit={handleSubmit}>
        <label style={styles.label}>Nome</label>
        <div style={styles.inputWrapper}>
          <input value={name} onChange={(e) => setName(e.target.value)} style={styles.input} placeholder="Seu nome" />
        </div>

        <label style={styles.label}>Email</label>
        <div style={styles.inputWrapper}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} placeholder="seu@email.com" />
        </div>

        <label style={styles.label}>Senha</label>
        <div style={styles.inputWrapper}>
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} style={styles.input} placeholder="••••••••" />
        </div>

        <label style={styles.label}>Confirmar senha</label>
        <div style={styles.inputWrapper}>
          <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} style={styles.input} placeholder="••••••••" />
        </div>

        {error && <div style={styles.error}>{error}</div>}

        <button type="submit" style={styles.button}>Cadastrar</button>

      </form>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg,#0d1218 0%, #0a0f16 100%)",
    color: "#F5F5F5",
    fontFamily: "Inter, sans-serif",
    padding: 20,
    boxSizing: "border-box"
  },

  header: { textAlign: "center", marginBottom: 20 },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 999,
    background: "#FCAF17",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    marginBottom: 8
  },
  title: { margin: 0, fontSize: 20, color: "#F5F5F5" },
  subtitle: { marginTop: 6, color: "#B3B3C5" },

  card: {
    width: 420,
    maxWidth: "96%",
    background: "#121722",
    padding: 28,
    borderRadius: 16,
    border: "1px solid #1E2736",
    boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
  },

  label: { display: "block", fontSize: 13, color: "#B3B3C5", marginBottom: 8, marginTop: 8, fontWeight: 500 },
  inputWrapper: { display: "flex", alignItems: "center", background: "#0F1218", padding: "12px 14px", borderRadius: 10, gap: 8, marginBottom: 12, border: "1px solid #1E2736" },
  icon: { opacity: 0.6 },
  input: { background: "transparent", border: "none", outline: "none", color: "#F5F5F5", flex: 1, fontSize: 14 },

  button: { width: "100%", background: "#FCAF17", color: "#000", padding: "12px 14px", borderRadius: 10, border: "none", fontWeight: 600, cursor: "pointer", fontSize: 14, transition: "all 0.2s" },

  error: { color: "#FF6B6B", marginBottom: 8, fontSize: 12 }
};
