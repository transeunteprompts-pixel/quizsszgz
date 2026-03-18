"use client";

import Link from "next/link";
import { COFRADIAS, TEMATICAS, REVIEW_MOCK } from "@/lib/quiz-config";

export default function ContributePage() {
  return (
    <div style={pageStyle}>
      <div style={shellStyle}>
        <div style={headerStyle}>Aportar preguntas</div>

        <section style={cardStyle}>
          <h3 style={titleStyle}>Nueva pregunta</h3>
          <p style={mutedStyle}>
            Todas las preguntas deben tener 4 respuestas. La temática es obligatoria y la cofradía
            solo se rellena si la pregunta pertenece a una cofradía concreta.
          </p>

          <div style={stackStyle}>
            <textarea placeholder="Escribe la pregunta" style={{ ...inputStyle, minHeight: 90, resize: "vertical" }} />
            <select style={inputStyle} defaultValue="">
              <option value="" disabled>Selecciona temática</option>
              {TEMATICAS.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>

            <select style={inputStyle} defaultValue="">
              <option value="">Cofradía (opcional)</option>
              {COFRADIAS.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>

            <input placeholder="Respuesta 1" style={inputStyle} />
            <input placeholder="Respuesta 2" style={inputStyle} />
            <input placeholder="Respuesta 3" style={inputStyle} />
            <input placeholder="Respuesta 4" style={inputStyle} />

            <select style={inputStyle} defaultValue="">
              <option value="" disabled>Marca la respuesta válida</option>
              <option value="1">Respuesta 1</option>
              <option value="2">Respuesta 2</option>
              <option value="3">Respuesta 3</option>
              <option value="4">Respuesta 4</option>
            </select>

            <textarea
              placeholder="Comentario o explicación breve para ayudar a los testers"
              style={{ ...inputStyle, minHeight: 90, resize: "vertical" }}
            />

            <button style={mainButton}>Enviar a revisión</button>
          </div>
        </section>

        <section style={cardStyle}>
          <h3 style={titleStyle}>Cómo funcionará</h3>
          <ul style={listStyle}>
            <li>Los usuarios registrados podrán proponer nuevas preguntas.</li>
            <li>Los testers o usuarios veteranos revisarán las preguntas antes de publicarlas.</li>
            <li>Si una pregunta ya publicada tiene un error, cualquier usuario podrá proponer una revisión con comentario.</li>
            <li>El sistema clasificará la dificultad automáticamente según el porcentaje de aciertos.</li>
          </ul>
        </section>

        <section style={cardStyle}>
          <h3 style={titleStyle}>Bandeja de revisión para testers</h3>
          <p style={mutedStyle}>
            Esta tarjeta deja preparada la idea de revisión de preguntas y propuestas de cambio.
          </p>

          <div style={stackStyle}>
            {REVIEW_MOCK.map((item) => (
              <div key={item.id} style={miniCardStyle}>
                <strong>{item.title}</strong>
                <p style={{ ...mutedStyle, marginBottom: 0 }}>{item.note}</p>
                <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                  <button style={secondaryButton}>Aprobar</button>
                  <button style={secondaryButton}>Revisar</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <BottomNav active="contribute" />
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

const miniCardStyle = {
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  padding: "12px",
  background: "#fafafa",
};

const titleStyle = { marginTop: 0, marginBottom: 8 };
const mutedStyle = { color: "#666", marginTop: 0 };
const stackStyle = { display: "flex", flexDirection: "column" as const, gap: "10px" };
const listStyle = { paddingLeft: "18px", margin: 0, color: "#333", lineHeight: 1.45 };

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "12px",
  border: "1px solid #d1d5db",
  outline: "none",
  font: "inherit",
  background: "white",
  boxSizing: "border-box" as const,
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

const secondaryButton = {
  padding: "10px 12px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
  background: "white",
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