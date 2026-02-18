import { obtenerDestinos } from "../services/api.js";

const container = document.getElementById("destinosContainer");
const destinos = await obtenerDestinos();

function renderDestinos(destinos) {
    
  container.innerHTML = destinos.map(destino => `
    <article class="card-destino" data-id="${destino.id}">
      <img src="${destino.imagen}" alt="${destino.nombre}">
      <h3>${destino.nombre}</h3>
      <p>${destino.descripcion}</p>
      <p><strong>$${destino.precio}</strong></p>
      <a href="reserva.html?id=${destino.id}" 
        class="btn btn-primary">
        Reservar
      </a>
    </article>
  `).join("");
  
  // Agregar event listeners a las cards
  document.querySelectorAll(".card-destino").forEach(card => {
    card.addEventListener("click", (e) => {
      // No abrir modal si se hace click en el botón Reservar
      if (e.target.closest(".btn-primary")) return;
      
      const id = card.dataset.id;
      const destino = destinos.find(d => d.id == id);
      mostrarModal(destino);
    });
  });
}

function mostrarModal(destino) {
  const modal = document.createElement("div");
  modal.className = "modal-overlay";
  modal.innerHTML = `
    <div class="modal-content">
      <button class="close-modal">&times;</button>
      <img src="${destino.imagen}" alt="${destino.nombre}" class="modal-imagen">
      <div class="modal-body">
        <h2>${destino.nombre}</h2>
        <p class="descripcion-larga">${destino.descripcionLarga}</p>
        <p class="precio-modal"><strong>Precio: $${destino.precio}</strong></p>
        <a href="reserva.html?id=${destino.id}" class="btn btn-primary">Reservar Ahora</a>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Event listener para cerrar modal
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest(".close-modal")) {
      modal.remove();
    }
  });
}

renderDestinos(destinos);