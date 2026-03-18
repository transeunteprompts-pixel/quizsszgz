import Link from "next/link";

export default function PlayPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F6F7F9",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "16px",
            borderRadius: "16px",
            fontWeight: "bold",
            border: "1px solid #e5e7eb",
          }}
        >
          Partida rápida
        </div>

        <div
          style={{
            background: "white",
            padding: "16px",
            borderRadius: "16px",
            border: "1px solid #e5e7eb",
          }}
        >
          <p style={{ color: "#666", marginTop: 0 }}>Pregunta 1/10</p>
          <h3>¿Qué ciudad protagoniza este juego?</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px" }}>
            <button style={botonRespuesta}>Sevilla</button>
            <button style={botonRespuesta}>Zaragoza</button>
            <button style={botonRespuesta}>Valladolid</button>
            <button style={botonRespuesta}>Cuenca</button>
          </div>
        </div>

        <div style={{ flex: 1 }} />

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            border: "1px solid #e5e7eb",
            padding: "12px",
            display: "flex",
            justifyContent: "space-around",
            position: "sticky",
            bottom: "8px",
          }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "#666" }}>
            Inicio
          </Link>
          <Link href="/play" style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>
            Jugar
          </Link>
          <Link href="/contribute" style={{ textDecoration: "none", color: "#666" }}>
            Aportar
          </Link>
          <Link href="/profile" style={{ textDecoration: "none", color: "#666" }}>
            Perfil
          </Link>
        </div>
      </div>
    </div>
  );
}

const botonRespuesta = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #d1d5db",
  background: "white",
  textAlign: "left" as const,
  cursor: "pointer",
};