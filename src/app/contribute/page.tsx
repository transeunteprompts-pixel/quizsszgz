import Link from "next/link";

export default function ContributePage() {
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
          Aportar preguntas
        </div>

        <div
          style={{
            background: "white",
            padding: "16px",
            borderRadius: "16px",
            border: "1px solid #e5e7eb",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <input placeholder="Escribe la pregunta" style={inputStyle} />
          <input placeholder="Respuesta 1" style={inputStyle} />
          <input placeholder="Respuesta 2" style={inputStyle} />
          <input placeholder="Respuesta 3" style={inputStyle} />
          <input placeholder="Respuesta 4" style={inputStyle} />
          <input placeholder="Número de la correcta (1-4)" style={inputStyle} />
          <button style={mainButton}>Publicar</button>
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
          <Link href="/play" style={{ textDecoration: "none", color: "#666" }}>
            Jugar
          </Link>
          <Link href="/contribute" style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>
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

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "12px",
  border: "1px solid #d1d5db",
  outline: "none",
};

const mainButton = {
  width: "100%",
  padding: "12px",
  borderRadius: "12px",
  background: "black",
  color: "white",
  border: "none",
  cursor: "pointer",
};