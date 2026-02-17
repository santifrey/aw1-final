const form = document.getElementById("formContacto");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mensaje enviado correctamente!");
  form.reset();
});