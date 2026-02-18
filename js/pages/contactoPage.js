import { validarEmail } from "../utils/validaciones.js";

const form = document.getElementById("formContacto");
const emailInput = document.getElementById("contactEmail");
const submitBtn = document.getElementById("contactSubmit");

if (form && emailInput && submitBtn) {
  const toggleSubmit = () => {
    const email = emailInput.value.trim();
    submitBtn.disabled = !validarEmail(email);
  };

  // Inicializar estado
  toggleSubmit();

  emailInput.addEventListener("input", toggleSubmit);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!validarEmail(email)) {
      alert("Por favor ingresa un email válido antes de enviar.");
      return;
    }
    alert("Mensaje enviado correctamente!");
    form.reset();
    toggleSubmit();
  });
}