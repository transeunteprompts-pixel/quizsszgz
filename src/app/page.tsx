import Link from "next/link";

export default function Home() {
  return (
    <div style={pageStyle}>
      <div style={shellStyle}>
        <div style={headerStyle}>Semana Santa Zaragoza</div>

        <section style={cardStyle}>
          <h3 style={titleStyle}>Partida rápida</h3>
          <p style={mutedStyle}>
            Juega en individual o con varios jugadores, elige rondas, temática y dificultad.
          </p>
          <Link href="/play">
            <button style={mainButton}>Jugar</button>
          </Link>
        </section>

        <section style={cardStyle}>
          <h3 style={titleStyle}>Tipos de partida</h3>
          <ul style={listStyle}>
            <li>Modo test con 4 opciones.</li>
            <li>Modo abierto para jugar con amigos sin pistas.</li>
            <li>Filtros por temática y dificultad.</li>
            <li>Partidas como invitado o con cuenta registrada.</li>
          </ul>
        </section>

        <section style={cardStyle}>
          <h3 style={titleStyle}>Comunidad</h3>
          <p style={mutedStyle}>
            Los usuarios registrados podrán proponer preguntas. Los testers revisarán altas nuevas y propuestas de corrección.
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            <Link href="/contribute" style={{ flex: 1 }}>
              <button style={mainButton}>Aportar</button>
            </Link>
            <Link href="/profile" style={{ flex: 1 }}>
              <button style={secondaryButton}>Ver ranking</button>
            </Link>
          </div>
        </section>

        <BottomNav active="home" />
      </div>
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

const secondaryButton = {
  width: "100%",
  padding: "12px",
  borderRadius: "12px",
  background: "white",
  color: "black",
  border: "1px solid #d1d5db",
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