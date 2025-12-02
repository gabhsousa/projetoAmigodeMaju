import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) {
      setStatus("Preencha o email para receber instruções.");
      return;
    }

    // Simulação: aqui você chamaria a API para enviar o email de recuperação
    setStatus("Se um usuário com esse email existir, enviamos instruções para recuperá-lo.");

    // após 2s, redireciona para o login
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.logo}>🍴</div>
        <h2 style={styles.title}>Recuperar senha</h2>
        <p style={styles.subtitle}>Digite seu email para receber instruções</p>
      </div>

      <form style={styles.card} onSubmit={handleSubmit}>
        <label style={styles.label}>Email</label>
        <div style={styles.inputWrapper}>
          <input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>

        {status && <div style={styles.info}>{status}</div>}

        <button type="submit" style={styles.button}>Enviar instruções</button>
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
  input: { background: "transparent", border: "none", outline: "none", color: "#F5F5F5", flex: 1, fontSize: 14 },

  button: { width: "100%", background: "#FCAF17", color: "#000", padding: "12px 14px", borderRadius: 10, border: "none", fontWeight: 600, cursor: "pointer", fontSize: 14, transition: "all 0.2s" },

  info: { color: "#B3B3C5", marginBottom: 12, fontSize: 12 }
};
