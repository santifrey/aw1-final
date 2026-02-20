import { obtenerReservas, eliminarReservaLocal } from "../services/storage.js";

const container = document.getElementById("reservasContainer");
const reservas = obtenerReservas();

function eliminarReserva(index) {
  if (confirm("¿Estás seguro de que deseas eliminar esta reserva?")) {
    eliminarReservaLocal(index);
    location.reload();
  }
}

function renderReservas(reservas) {
  if (reservas.length === 0) {
    container.innerHTML = `
      <div class="alert alert-info text-center">
        <p>No tienes reservas aún.</p>
        <a href="reserva.html" class="btn btn-primary">Hacer una Reserva</a>
      </div>
    `;
    return;
  }

  container.innerHTML = reservas.map((reserva, index) => `
    <div class="card mb-3 shadow-sm">
      <div class="card-body">
        <div class="row">
          <div class="col-md-8">
            <h5 class="card-title">Reserva #${index + 1}</h5>
            <p class="card-text"><strong>Nombre:</strong> ${reserva.nombre}</p>
            <p class="card-text"><strong>Email:</strong> ${reserva.email}</p>
            <p class="card-text"><strong>Destino:</strong> ${reserva.destino}</p>
            <p class="card-text"><strong>Personas:</strong> ${reserva.personas}</p>
          </div>
          <div class="col-md-4 text-end d-flex flex-column justify-content-between">
            <div>
              <p class="h5 text-success">Total: $${reserva.total}</p>
            </div>
            <button class="btn btn-danger btn-sm btn-eliminar" data-index="${index}">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  // Agregar event listeners a los botones
  document.querySelectorAll(".btn-eliminar").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.index);
      eliminarReserva(index);
    });
  });
}

renderReservas(reservas);
