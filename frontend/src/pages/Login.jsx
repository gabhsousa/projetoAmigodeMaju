import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !senha) {
      setError("Preencha email e senha.");
      return;
    }

    // Simulação de login: salvar token e navegar para a aplicação
    localStorage.setItem("token", "demo-token");
    navigate("/");
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.logo}>🍴</div>
        <h2 style={styles.title}>Restaurante-Dev-s</h2>
        <p style={styles.subtitle}>Faça login para continuar</p>
      </div>

      <form style={styles.card} onSubmit={handleSubmit}>
        <label style={styles.label}>Email</label>
        <div style={styles.inputWrapper}>
          <span style={styles.icon}>📧</span>
          <input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>

        <label style={styles.label}>Senha</label>
        <div style={styles.inputWrapper}>
          <span style={styles.icon}>🔒</span>
          <input
            type="password"
            placeholder="••••••••"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.forgot}><a href="/forgot" style={styles.link}>Esqueceu a senha?</a></div>

        {error && <div style={styles.error}>{error}</div>}

        <button type="submit" style={styles.button}>Entrar</button>

        <div style={styles.or}>ou</div>

        <div style={styles.register}>Não tem uma conta? <Link to="/register" style={styles.link}>Cadastre-se</Link></div>
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
  icon: { opacity: 0.6, fontSize: 16 },
  input: { background: "transparent", border: "none", outline: "none", color: "#F5F5F5", flex: 1, fontSize: 14 },

  forgot: { textAlign: "right", marginTop: 8, marginBottom: 12, cursor: "pointer" },

  button: { width: "100%", background: "#FCAF17", color: "#000", padding: "12px 14px", borderRadius: 10, border: "none", fontWeight: 600, cursor: "pointer", fontSize: 14, transition: "all 0.2s" },

  or: { textAlign: "center", color: "#696B7E", margin: "14px 0", fontSize: 12 },
  register: { textAlign: "center", color: "#B3B3C5", fontSize: 13 },
  link: { color: "#FCAF17", cursor: "pointer", textDecoration: "none" },

  error: { color: "#FF6B6B", marginBottom: 8, fontSize: 12 }
};
