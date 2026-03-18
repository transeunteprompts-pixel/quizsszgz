"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { MOCK_QUESTION, TEMATICAS } from "@/lib/quiz-config";

export default function PlayPage() {
  const [showOptions, setShowOptions] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState("1");
  const [selectedRounds, setSelectedRounds] = useState("10");
  const [selectedTheme, setSelectedTheme] = useState("Todas");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Automática");

  const answerText = useMemo(
    () => MOCK_QUESTION.options[MOCK_QUESTION.correctIndex],
    []
  );

  return (
    <div style={pageStyle}>
      <div style={shellStyle}>
        <div style={headerStyle}>Jugar</div>

        <section style={cardStyle}>
          <h3 style={titleStyle}>Configurar partida</h3>
          <div style={gridStyle}>
            <label style={labelStyle}>
              <span>Jugadores</span>
              <select value={selectedPlayers} onChange={(e) => setSelectedPlayers(e.target.value)} style={inputStyle}>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={String(n)}>{n}</option>
                ))}
              </select>
            </label>

            <label style={labelStyle}>
              <span>Preguntas por ronda</span>
              <select value={selectedRounds} onChange={(e) => setSelectedRounds(e.target.value)} style={inputStyle}>
                {[5, 10, 15, 20].map((n) => (
                  <option key={n} value={String(n)}>{n}</option>
                ))}
              </select>
            </label>

            <label style={labelStyle}>
              <span>Temática</span>
              <select value={selectedTheme} onChange={(e) => setSelectedTheme(e.target.value)} style={inputStyle}>
                <option value="Todas">Todas</option>
                {TEMATICAS.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </label>

            <label style={labelStyle}>
              <span>Dificultad</span>
              <select value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)} style={inputStyle}>
                <option value="Automática">Automática</option>
                <option value="Fácil">Fácil</option>
                <option value="Media">Media</option>
                <option value="Difícil">Difícil</option>
              </select>
            </label>
          </div>

          <div style={{ ...stackStyle, marginTop: 12 }}>
            <button
              onClick={() => {
                setShowOptions(true);
                setShowAnswer(false);
              }}
              style={mainButton}
            >
              Modo test con 4 opciones
            </button>
            <button
              onClick={() => {
                setShowOptions(false);
                setShowAnswer(false);
              }}
              style={secondaryButton}
            >
              Modo abierto sin pistas
            </button>
          </div>

          <p style={{ ...mutedStyle, marginBottom: 0, marginTop: 12 }}>
            Puedes jugar en solitario o con amigos. En modo abierto se dice la respuesta en voz alta y luego se revela la solución.
          </p>
        </section>

        <section style={cardStyle}>
          <p style={{ color: "#666", marginTop: 0 }}>
            Pregunta 1/{selectedRounds} · {selectedPlayers === "1" ? "Individual" : `${selectedPlayers} jugadores`} · {selectedTheme}
          </p>
          <h3 style={titleStyle}>{MOCK_QUESTION.question}</h3>

          {showOptions ? (
            <div style={stackStyle}>
              {MOCK_QUESTION.options.map((option) => (
                <button key={option} style={answerButton}>
                  {option}
                </button>
              ))}
              <p style={{ ...mutedStyle, marginBottom: 0 }}>
                En este modo el jugador marca una de las 4 opciones y después se le dirá si ha acertado o no.
              </p>
            </div>
          ) : (
            <div style={stackStyle}>
              <div style={openModeBox}>
                <strong>Modo abierto</strong>
                <p style={{ ...mutedStyle, marginBottom: 0 }}>
                  Di tu respuesta sin pistas. Luego pulsa el botón para mostrar la solución.
                </p>
              </div>

              {!showAnswer ? (
                <button onClick={() => setShowAnswer(true)} style={mainButton}>
                  Mostrar respuesta correcta
                </button>
              ) : (
                <>
                  <div style={correctAnswerBox}>
                    <strong>Respuesta correcta:</strong> {answerText}
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button style={mainButton}>He acertado</button>
                    <button style={secondaryButton}>He fallado</button>
                  </div>
                </>
              )}
            </div>
          )}
        </section>

        <BottomNav active="play" />
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

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",
};

const labelStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "6px",
  color: "#333",
  fontSize: "14px",
};

const titleStyle = { marginTop: 0, marginBottom: 8 };
const mutedStyle = { color: "#666", marginTop: 0 };
const stackStyle = { display: "flex", flexDirection: "column" as const, gap: "10px" };

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

const answerButton = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #d1d5db",
  background: "white",
  textAlign: "left" as const,
  cursor: "pointer",
};

const openModeBox = {
  borderRadius: "12px",
  background: "#fafafa",
  border: "1px solid #e5e7eb",
  padding: "12px",
};

const correctAnswerBox = {
  borderRadius: "12px",
  background: "#eefbf0",
  border: "1px solid #b7e4c7",
  padding: "12px",
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