const destinos = [
  { nombre: "Bariloche", precio: 80000 },
  { nombre: "Mendoza", precio: 65000 },
  { nombre: "Cataratas", precio: 90000 },
  { nombre: "Rio", precio: 90000 },
  { nombre: "Santiago", precio: 90000 }
];

document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("destinosContainer");

  if (container) {
    destinos.forEach(destino => {
      container.innerHTML += `
        <article class="card-destino">
          <h3>${destino.nombre}</h3>
          <p>Precio base: $${destino.precio}</p>
          <a href="reserva.html" class="btn btn-primary">Reservar</a>
        </article>
      `;
    });
  }

  const selectDestino = document.getElementById("destino");
  if (selectDestino) {
    destinos.forEach(d => {
      selectDestino.innerHTML += `<option value="${d.precio}">${d.nombre}</option>`;
    });
  }

  const form = document.getElementById("formReserva");
  if (form) {
    const personasInput = document.getElementById("personas");
    const seguroCheck = document.getElementById("seguro");
    const totalSpan = document.getElementById("total");

    function calcularTotal() {
      const precio = parseInt(selectDestino.value);
      const personas = parseInt(personasInput.value) || 0;
      let total = precio * personas;
      if (seguroCheck.checked) total += 5000;
      totalSpan.textContent = total;
    }

    personasInput.addEventListener("input", calcularTotal);
    seguroCheck.addEventListener("change", calcularTotal);
    selectDestino.addEventListener("change", calcularTotal);

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();

      if (!/^[A-Za-z\s]+$/.test(nombre)) {
        alert("Nombre inválido");
        return;
      }

    
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Email inválido");
        return;
      }

      const reserva = {
        nombre,
        email,
        destino: selectDestino.options[selectDestino.selectedIndex].text,
        personas: personasInput.value,
        total: totalSpan.textContent
      };

      localStorage.setItem("reserva", JSON.stringify(reserva));

      document.getElementById("mensaje").innerHTML =
        `<div class="alert alert-success">Reserva confirmada!</div>`;

      form.reset();
      totalSpan.textContent = 0;
    });
  }

});