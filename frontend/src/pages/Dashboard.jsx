import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Dashboard() {
  const chartData = {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    datasets: [
      {
        label: "Pedidos",
        data: [15, 22, 34, 27, 19, 28, 24],
        backgroundColor: "#FCAF17",
        borderRadius: 8
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: "#999" }, grid: { display: false } },
      y: { ticks: { color: "#777" }, grid: { color: "#1A1A1A" } }
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Dashboard</h1>
      <p style={styles.subtitle}>Resumo do desempenho de hoje</p>

      {/* KPIs */}
      <div style={styles.kpiRow}>
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <span style={styles.icon}>🍽</span>
            <h3 style={styles.cardTitle}>Pedidos Hoje</h3>
          </div>
          <p style={styles.cardValue}>34</p>
          <p style={styles.positive}>▲ 9% em relação a ontem</p>
        </div>

        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <span style={styles.icon}>📦</span>
            <h3 style={styles.cardTitle}>Produtos</h3>
          </div>
          <p style={styles.cardValue}>12</p>
        </div>

        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <span style={styles.icon}>💰</span>
            <h3 style={styles.cardTitle}>Faturamento</h3>
          </div>
          <p style={styles.cardValue}>R$ 457,00</p>
          <p style={styles.negative}>▼ 5% em relação a ontem</p>
        </div>
      </div>

      {/* Gráfico + Últimos pedidos */}
      <div style={styles.bottomRow}>
        <div style={styles.bigCard}>
          <h3 style={styles.bigCardTitle}>Pedidos – Últimos 7 dias</h3>
          <p style={styles.bigCardSubtitle}>Visão geral semanal</p>
          <div style={styles.chartArea}>
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>

        <div style={styles.bigCard}>
          <h3 style={styles.bigCardTitle}>Últimos pedidos</h3>
          <p style={styles.bigCardSubtitle}>Atualizado há 5 min</p>

          <div style={styles.orderList}>
            <div style={styles.orderItem}>
              <span>João Silva</span>
              <span style={styles.price}>R$ 57,00</span>
            </div>
            <div style={styles.orderItem}>
              <span>Ana Souza</span>
              <span style={styles.price}>R$ 21,00</span>
            </div>
            <div style={styles.orderItem}>
              <span>Pedro Lima</span>
              <span style={styles.price}>R$ 89,00</span>
            </div>
            <div style={styles.orderItem}>
              <span>Carla Melo</span>
              <span style={styles.price}>R$ 18,00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    width: "100%",
    padding: "20px",
    color: "#F5F5F5",
    fontFamily: "Inter, sans-serif",
    boxSizing: "border-box"
  },

  title: { fontSize: "32px", fontWeight: 700, marginBottom: "4px" },
  subtitle: { fontSize: "14px", color: "#B3B3C5", marginBottom: "22px" },

  kpiRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginBottom: "26px"
  },

  card: {
    background: "#202028",
    padding: "20px",
    borderRadius: "18px",
    border: "1px solid #262732",
    boxShadow: "0 10px 25px rgba(0,0,0,0.35)"
  },

  cardHeader: { display: "flex", alignItems: "center", gap: "8px" },
  icon: { fontSize: "18px" },
  cardTitle: { fontSize: "14px", fontWeight: 600 },

  cardValue: { fontSize: "30px", fontWeight: 700, marginTop: "8px" },
  positive: { fontSize: "12px", color: "#2ECC71", marginTop: "4px" },
  negative: { fontSize: "12px", color: "#E74C3C", marginTop: "4px" },

  bottomRow: {
    display: "grid",
    gridTemplateColumns: "1.6fr 1fr",
    gap: "20px"
  },

  bigCard: {
    background: "#202028",
    padding: "20px",
    borderRadius: "18px",
    border: "1px solid #262732",
    boxShadow: "0 10px 25px rgba(0,0,0,0.35)"
  },

  bigCardTitle: { fontSize: "15px", fontWeight: 600 },
  bigCardSubtitle: { fontSize: "13px", color: "#A0A0B3", marginBottom: "14px" },

  chartArea: { width: "100%", height: "210px" },

  orderList: { display: "flex", flexDirection: "column", gap: "14px" },

  orderItem: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "8px",
    borderBottom: "1px solid #262732",
    fontSize: "14px"
  },

  price: { color: "#F1F1F5", fontWeight: 600 }
};
