import Link from "next/link";

export default function Home() {
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
          Semana Santa Zaragoza
        </div>

        <div
          style={{
            background: "white",
            padding: "16px",
            borderRadius: "16px",
            border: "1px solid #e5e7eb",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Partida rápida</h3>
          <p>10 preguntas · mixto</p>

          <Link href="/play">
            <button
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "12px",
                borderRadius: "12px",
                background: "black",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Jugar
            </button>
          </Link>
        </div>

        <div
          style={{
            background: "white",
            padding: "16px",
            borderRadius: "16px",
            border: "1px solid #e5e7eb",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Por temática</h3>
          <p>Historia · Cofradías · Arte · Liturgia</p>
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
          <Link href="/" style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>
            Inicio
          </Link>
          <Link href="/play" style={{ textDecoration: "none", color: "#666" }}>
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