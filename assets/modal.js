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
    text: "Salva vidas atendiendo emergencias, accidentes y ayudando a los ciudadanos de Los Santos.",
    image: "./assets/ems-map.jpg",
    extra: "El hospital central está en Pillbox Hill, abierto 24/7."
  },
  bandas: {
    title: "BANDAS - Imperio Criminal",
    text: "Domina las calles y haz tu propio imperio criminal en el mundo de Los Santos.",
    image: "./assets/banda.jpeg",
    extra: "Forma parte de una banda y lucha por el control de las zonas del mapa."
  }
};

// Abrir modal
function openModal(key) {
  const data = panels[key];
  if (!data) return;

  title.textContent = data.title;
  text.textContent = data.text;

  image.src = data.image;        // 👈 primero imagen
  extra.textContent = data.extra; // 👈 luego extra

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