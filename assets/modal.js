// assets/modal.js

const modal = document.getElementById("modal");
const title = document.getElementById("modalTitle");
const text = document.getElementById("modalText");
const extra = document.getElementById("modalExtra"); // 👈 FALTABA
const image = document.getElementById("modalImage");

const closeBtn = document.getElementById("closeModal");

const panels = {
  lspd: {
    title: "LSPD - Policía de Los Santos",
    text: "Los Santos Police Department (LSPD) es la principal fuerza de seguridad de la ciudad. Su misión es mantener el orden público, prevenir el crimen y proteger a todos los ciudadanos de Los Santos mediante patrullas, intervenciones y operaciones especiales.",
    image: "./assets/lspd-map.jpg",
    extra: "📍 Sede principal: Mission Row Police Station\n\n👮 Funciones principales:\n- Patrullaje urbano y control de zonas conflictivas\n- Control de tráfico y persecuciones\n- Apoyo en situaciones de alto riesgo\n\n🎓 Requisitos básicos:\n- Buen comportamiento en el servidor\n- Conocimiento de las normas internas\n- Trabajo en equipo y disciplina\n\n"
  },
  staff: {
    title: "Staff Activo",
    text: "Nuestro equipo de staff está siempre disponible para ayudarte y mantener el servidor justo y divertido.",
    image: "./assets/staff-info.jpg",
    extra: "Puedes reportar bugs, jugadores o pedir ayuda desde Discord o dentro del juego (F4)."
  },
  skate: {
    title: "Actividades y Eventos",
    text: "Explora todo tipo de actividades dentro de Los Santos. Desde deportes urbanos hasta eventos organizados, siempre hay algo que hacer para pasar un buen rato con otros jugadores.",
    image: "./assets/map-events.jpg",
    extra: "🗺️ Revisa el mapa para encontrar zonas interesantes.\n\n- Skate parks y zonas urbanas\n- BMX y circuitos freestyle\n- Acampadas y zonas recreativas\n- Parques de atracciones\n- Paintball y combates amistosos\n\nLa mayoría de actividades están pensadas para jugar en grupo, fomentando la interacción entre jugadores."
  },
  ems: {
    title: "EMS - Servicios Médicos",
    text: "El servicio EMS es el encargado de atender todas las emergencias médicas en Los Santos. Su labor es fundamental para garantizar la supervivencia de los ciudadanos, actuando con rapidez, precisión y coordinación en todo tipo de situaciones.",
    image: "./assets/ems-map.jpg",
    extra: "📍 Ubicación principal: Hospital central en Pillbox Hill.\n\n🚑 Funciones principales:\n- Atención a heridos en accidentes de tráfico\n- Reanimación y estabilización en campo\n- Coordinación con LSPD en emergencias\n\n👨‍⚕️ Requisitos:\n- Responsabilidad y rapidez de respuesta\n- Trabajo en equipo\n- Conocimiento básico de protocolos médicos (RP)\n\n⚠️ Importante:\nLos EMS son un servicio neutral, su prioridad siempre es salvar vidas sin importar la situación.\n"
  },
  bandas: {
    title: "BANDAS - Imperio Criminal",
    text: "Adéntrate en el mundo criminal de Los Santos y construye tu propio imperio desde cero. Las bandas dominan territorios, controlan negocios ilegales y luchan constantemente por el poder en las calles.",
    image: "./assets/banda.jpeg",
    extra: "🗺️ Cada banda puede dominar zonas del mapa, obteniendo beneficios y control estratégico sobre la ciudad.\n\n💰 Actividades ilegales:\n- Tráfico de drogas\n- Robos organizados\n- Secuestros y extorsión\n- Mercado negro\n\n🔫 Conflictos entre bandas:\n- Guerras por territorios\n- Enfrentamientos armados\n- Alianzas y traiciones\n\n👥 Organización interna:\n- Líderes y jerarquías\n- Reclutamiento de nuevos miembros\n- Roles dentro de la banda\n\n⚠️ Riesgos:\n- Intervención del LSPD\n- Pérdida de territorio\n- Conflictos constantes con otras bandas\n\nDominar las calles no es fácil. Solo las bandas más organizadas y estratégicas logran mantenerse en la cima."
  }
};

// Abrir modal
function openModal(key) {
  const data = panels[key];
  if (!data) return;

  title.textContent = data.title;
  text.textContent = data.text;

  image.src = data.image;        
  extra.textContent = data.extra; 

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

// Cerrar modal
function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// Eventos
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});