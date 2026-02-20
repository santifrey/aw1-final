import { validarEmail, validarNombre } from "../utils/validaciones.js";

const form = document.getElementById("formContacto");
const nombreInput = document.getElementById("contactNombre");
const emailInput = document.getElementById("contactEmail");
const submitBtn = document.getElementById("contactSubmit");

if (form && nombreInput && emailInput && submitBtn) {
  const toggleSubmit = () => {
    const nombre = nombreInput.value.trim();
    const email = emailInput.value.trim();
    submitBtn.disabled = !validarNombre(nombre) || !validarEmail(email);
  };

  // Inicializar estado
  toggleSubmit();

  nombreInput.addEventListener("input", toggleSubmit);
  emailInput.addEventListener("input", toggleSubmit);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = nombreInput.value.trim();
    const email = emailInput.value.trim();
    
    if (!validarNombre(nombre)) {
      alert("Por favor ingresa un nombre válido (solo letras y espacios).");
      return;
    }
    
    if (!validarEmail(email)) {
      alert("Por favor ingresa un email válido antes de enviar.");
      return;
    }
    alert("Mensaje enviado correctamente!");
    form.reset();
    toggleSubmit();
  });
}