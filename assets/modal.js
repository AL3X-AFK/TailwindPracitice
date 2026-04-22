// assets/modal.js

const modal = document.getElementById("modal");
const title = document.getElementById("modalTitle");
const text = document.getElementById("modalText");
const closeBtn = document.getElementById("closeModal");

// Contenido de cada panel
const panels = {
  lspd: {
    title: "LSPD - Policía de Los Santos",
    text: "Únete al cuerpo policial y protege la ciudad. Patrulla, investiga delitos y mantén el orden en Los Santos.",
    image: "./assets/lspd-map.jpg",
    extra: "La comisaría principal se encuentra en Mission Row. Aquí puedes iniciar tu carrera policial."
  },
  staff: {
    title: "Staff Activo",
    text: "Nuestro equipo de staff está siempre disponible para ayudarte y mantener el servidor justo y divertido.",
    image: "./assets/staff-info.jpg",
    extra: "Puedes reportar bugs, jugadores o pedir ayuda desde Discord o dentro del juego."
  },
  skate: {
    title: "Actividades",
    text: "Participa en eventos, carreras, deportes urbanos y muchas actividades dentro del servidor.",
    image: "./assets/map-events.jpg",
    extra: "Revisa el mapa para ver zonas de eventos activos cada día."
  },
  ems: {
    title: "EMS - Servicios Médicos",
    text: "Salva vidas atendiendo emergencias, accidentes y ayudando a los ciudadanos de Los Santos.",
    image: "./assets/ems-map.jpg",
    extra: "El hospital central está en Pillbox Hill, abierto 24/7."
  }
};

// Abrir modal
function openModal(key) {
  const data = panels[key];
  if (!data) return;

  title.textContent = data.title;
  text.textContent = data.text;

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

// Click fuera del modal
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});