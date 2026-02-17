import { obtenerDestinos } from "../services/api.js";

const container = document.getElementById("destinosContainer");
const destinos = await obtenerDestinos();

function renderDestinos(destinos) {
    destinos.forEach(destino=> {
        container.innerHTML += `
    <article class="card-destino">
      <img src="${destino.imagen}" alt="${destino.nombre}">
      <h3>${destino.nombre}</h3>
      <p>${destino.descripcion}</p>
      <p><strong>$${destino.precio}</strong></p>
      <a href="reserva.html" class="btn btn-primary">Reservar</a>
    </article>
  `
        
    });
  container.innerHTML = destinos.map(destino => `
    <article class="card-destino">
      <img src="${destino.imagen}" alt="${destino.nombre}">
      <h3>${destino.nombre}</h3>
      <p>${destino.descripcion}</p>
      <p><strong>$${destino.precio}</strong></p>
      <a href="reserva.html" class="btn btn-primary">Reservar</a>
    </article>
  `).join("");
}
renderDestinos(destinos);