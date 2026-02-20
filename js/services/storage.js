export function guardarReserva(reserva) {
  const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
  reservas.push(reserva);
  localStorage.setItem("reservas", JSON.stringify(reservas));
}

export function obtenerReservas() {
  return JSON.parse(localStorage.getItem("reservas")) || [];
}

export function eliminarReservaLocal(index) {
  const reservas = obtenerReservas();
  reservas.splice(index, 1);
  localStorage.setItem("reservas", JSON.stringify(reservas));
}