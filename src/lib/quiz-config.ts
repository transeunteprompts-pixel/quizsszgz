export const TEMATICAS = [
  "Historia",
  "Pasos",
  "Marchas",
  "Curiosidades",
] as const;

export const COFRADIAS = [
  "Calvario",
  "Columna",
  "Coronacion",
  "Crucifixion",
  "Descendimiento",
  "Despojado",
  "Dolorosa",
  "Eccehomo",
  "Entrada",
  "Esclavas",
  "Eucaristia",
  "Exaltacion",
  "Humildad",
  "Humillacion",
  "Llegada",
  "Nazarenos",
  "Negaciones",
  "Oración en el huerto",
  "Piedad",
  "Prendimiento",
  "Resucitado",
  "Sangre de cristo",
  "Siete Palabras",
  "Silencio",
  "Veronica",
] as const;

export const MOCK_QUESTION = {
  id: 1,
  question: "¿Qué ciudad protagoniza este juego?",
  options: ["Sevilla", "Zaragoza", "Valladolid", "Cuenca"],
  correctIndex: 1,
  theme: "Historia",
  brotherhood: "",
};

export const RANKING_MOCK = [
  { nick: "Capirote86", points: 1280 },
  { nick: "TamborZgz", points: 1175 },
  { nick: "Nazareno14", points: 980 },
];

export const REVIEW_MOCK = [
  {
    id: 1,
    title: "Revisión pendiente",
    note: "El usuario indica que la respuesta correcta puede estar mal formulada.",
  },
  {
    id: 2,
    title: "Propuesta de mejora",
    note: "Sugerencia para aclarar la cofradía y la explicación histórica.",
  },
];