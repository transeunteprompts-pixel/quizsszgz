import Link from "next/link";
import { RANKING_MOCK } from "../../lib/quiz-config";

export default function ProfilePage() {
  return (
    <div style={pageStyle}>
      <div style={shellStyle}>
        <div style={headerStyle}>Perfil y rankings</div>

        <section style={cardStyle}>
          <h3 style={titleStyle}>Invitado</h3>
          <p style={mutedStyle}>
            Se podrá jugar como invitado o registrarse para crear preguntas, enviar revisiones y entrar en rankings.
          </p>

          <div style={statsGrid}>
            <StatCard label="XP" value="0" />
            <StatCard label="REP" value="0" />
          </div>

          <button style={mainButton}>Crear cuenta / Entrar</button>
        </section>

        <section style={cardStyle}>
          <h3 style={titleStyle}>Ranking general</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {RANKING_MOCK.map((item, index) => (
              <div key={item.nick} style={rankRow}>
                <strong>#{index + 1}</strong>
                <span>{item.nick}</span>
                <span>{item.points} pts</span>
              </div>
            ))}
          </div>
        </section>

        <section style={cardStyle}>
          <h3 style={titleStyle}>Lo siguiente</h3>
          <ul style={listStyle}>
            <li>Rankings por modo individual y multijugador.</li>
            <li>Panel de testers para aprobar nuevas preguntas.</li>
            <li>Dificultad automática según porcentaje de aciertos.</li>
            <li>Historial de propuestas de revisión de preguntas.</li>
          </ul>
        </section>

        <BottomNav active="profile" />
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div style={statCard}>
      <div style={{ color: "#666", fontSize: 13 }}>{label}</div>
      <div style={{ fontWeight: "bold", fontSize: 22 }}>{value}</div>
    </div>
  );
}

function BottomNav({ active }: { active: "home" | "play" | "contribute" | "profile" }) {
  const inactive = { textDecoration: "none", color: "#666" };
  const activeStyle = { textDecoration: "none", color: "black", fontWeight: "bold" as const };

  return (
    <div style={bottomNavStyle}>
      <Link href="/" style={active === "home" ? activeStyle : inactive}>Inicio</Link>
      <Link href="/play" style={active === "play" ? activeStyle : inactive}>Jugar</Link>
      <Link href="/contribute" style={active === "contribute" ? activeStyle : inactive}>Aportar</Link>
      <Link href="/profile" style={active === "profile" ? activeStyle : inactive}>Perfil</Link>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "#F6F7F9",
  display: "flex",
  justifyContent: "center",
};

const shellStyle = {
  width: "100%",
  maxWidth: "420px",
  padding: "16px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "12px",
};

const headerStyle = {
  background: "white",
  padding: "16px",
  borderRadius: "16px",
  fontWeight: "bold",
  border: "1px solid #e5e7eb",
};

const cardStyle = {
  background: "white",
  padding: "16px",
  borderRadius: "16px",
  border: "1px solid #e5e7eb",
};

const titleStyle = { marginTop: 0, marginBottom: 8 };
const mutedStyle = { color: "#666", marginTop: 0 };
const statsGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",
  marginBottom: 12,
};

const statCard = {
  padding: "12px",
  borderRadius: "12px",
  border: "1px solid #e5e7eb",
  background: "#fafafa",
};

const rankRow = {
  display: "grid",
  gridTemplateColumns: "48px 1fr auto",
  gap: "10px",
  alignItems: "center",
  padding: "10px 12px",
  borderRadius: "12px",
  border: "1px solid #e5e7eb",
  background: "#fafafa",
};

const listStyle = { paddingLeft: "18px", margin: 0, color: "#333", lineHeight: 1.45 };

const mainButton = {
  width: "100%",
  padding: "12px",
  borderRadius: "12px",
  background: "black",
  color: "white",
  border: "none",
  cursor: "pointer",
};

const bottomNavStyle = {
  background: "white",
  borderRadius: "16px",
  border: "1px solid #e5e7eb",
  padding: "12px",
  display: "flex",
  justifyContent: "space-around",
  position: "sticky" as const,
  bottom: "8px",
};
